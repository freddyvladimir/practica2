//express
const express = require('express');
//const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000; // puede cambiar

//array 
let librosBiblicos = [
    {
        id: 1,
        nombre: "Génesis",
        autor: "Tradicionalmente atribuido a Moisés",
        anioPublicacion: 1200
    },
    {
        id: 2,
        nombre: "Éxodo",
        autor: "Tradicionalmente atribuido a Moisés",
        anioPublicacion: 1200
    },
    {
        id: 3,
        nombre: "Levítico",
        autor: "Tradicionalmente atribuido a Moisés",
        anioPublicacion: 1200
    },
    {
        id: 4,
        nombre: "Números",
        autor: "Tradicionalmente atribuido a Moisés",
        anioPublicacion: 1200
    },
    {
        id: 5,
        nombre: "Deuteronomio",
        autor: "Tradicionalmente atribuido a Moisés",
        anioPublicacion: 1200
    },
    {
        id: 6,
        nombre: "Josué",
        autor: "Tradicionalmente atribuido a Josué",
        anioPublicacion: 1150
    },
    {
        id: 7,
        nombre: "Jueces",
        autor: "Tradicionalmente atribuido a Samuel",
        anioPublicacion: 1050
    },
    {
        id: 8,
        nombre: "Rut",
        autor: "Tradicionalmente atribuido a Samuel",
        anioPublicacion: 1050
    },
    {
        id: 9,
        nombre: "1 Samuel",
        autor: "Tradicionalmente atribuido a Samuel",
        anioPublicacion: 1000
    },
    {
        id: 10,
        nombre: "2 Samuel",
        autor: "Tradicionalmente atribuido a Samuel",
        anioPublicacion: 1000
    },
    {
        id: 11,
        nombre: "1 Reyes",
        autor: "Tradicionalmente atribuido a Jeremías",
        anioPublicacion: 600
    },
    {
        id: 12,
        nombre: "2 Reyes",
        autor: "Tradicionalmente atribuido a Jeremías",
        anioPublicacion: 600
    },
    {
        id: 13,
        nombre: "Isaías",
        autor: "Isaías",
        anioPublicacion: 700
    },
    {
        id: 14,
        nombre: "Jeremías",
        autor: "Jeremías",
        anioPublicacion: 600
    },
    {
        id: 15,
        nombre: "Lamentaciones",
        autor: "Tradicionalmente atribuido a Jeremías",
        anioPublicacion: 600
    },
    {
        id: 16,
        nombre: "Ezequiel",
        autor: "Ezequiel",
        anioPublicacion: 600
    },
    {
        id: 17,
        nombre: "Daniel",
        autor: "Daniel",
        anioPublicacion: 500
    },
    {
        id: 18,
        nombre: "Oseas",
        autor: "Oseas",
        anioPublicacion: 750
    },
    {
        id: 19,
        nombre: "Joel",
        autor: "Joel",
        anioPublicacion: 800
    },
    {
        id: 20,
        nombre: "Amós",
        autor: "Amós",
        anioPublicacion: 750
    },
    {
        id: 21,
        nombre: "Abdías",
        autor: "Abdías",
        anioPublicacion: 600
    },
    {
        id: 22,
        nombre: "Jonás",
        autor: "Jonás",
        anioPublicacion: 800
    },
    {
        id: 23,
        nombre: "Miqueas",
        autor: "Miqueas",
        anioPublicacion: 700
    },
    {
        id: 24,
        nombre: "Nahúm",
        autor: "Nahúm",
        anioPublicacion: 600
    },
    {
        id: 25,
        nombre: "Habacuc",
        autor: "Habacuc",
        anioPublicacion: 600
    },
    {
        id: 26,
        nombre: "Sofonías",
        autor: "Sofonías",
        anioPublicacion: 600
    },
    {
        id: 27,
        nombre: "Hageo",
        autor: "Hageo",
        anioPublicacion: 500
    },
    {
        id: 28,
        nombre: "Zacarías",
        autor: "Zacarías",
        anioPublicacion: 500
    },
    {
        id: 29,
        nombre: "Malaquías",
        autor: "Malaquías",
        anioPublicacion: 400
    },
    {
        id: 30,
        nombre: "Mateo",
        autor: "Mateo",
        anioPublicacion: 70
    },
    {
        id: 31,
        nombre: "Marcos",
        autor: "Tradicionalmente atribuido a Juan Marcos",
        anioPublicacion: 65
    },
    {
        id: 32,
        nombre: "Lucas",
        autor: "Lucas",
        anioPublicacion: 80
    },
    {
        id: 33,
        nombre: "Juan",
        autor: "Juan",
        anioPublicacion: 90
    },
    {
        id: 34,
        nombre: "Hechos",
        autor: "Tradicionalmente atribuido a Lucas",
        anioPublicacion: 85
    },
    {
        id: 35,
        nombre: "Romanos",
        autor: "Pablo",
        anioPublicacion: 57
    },
    {
        id: 36,
        nombre: "1 Corintios",
        autor: "Pablo",
        anioPublicacion: 55
    },
    {
        id: 37,
        nombre: "2 Corintios",
        autor: "Pablo",
        anioPublicacion: 56
    },
    {
        id: 38,
        nombre: "Gálatas",
        autor: "Pablo",
        anioPublicacion: 48
    },
    {
        id: 39,
        nombre: "Efesios",
        autor: "Pablo",
        anioPublicacion: 60
    },
    {
        id: 40,
        nombre: "Filipenses",
        autor: "Pablo",
        anioPublicacion: 61
    },
    {
        id: 41,
        nombre: "Colosenses",
        autor: "Pablo",
        anioPublicacion: 60
    },
    {
        id: 42,
        nombre: "1 Tesalonicenses",
        autor: "Pablo",
        anioPublicacion: 51
    },
    {
        id: 43,
        nombre: "2 Tesalonicenses",
        autor: "Pablo",
        anioPublicacion: 51
    },
    {
        id: 44,
        nombre: "1 Timoteo",
        autor: "Pablo",
        anioPublicacion: 62
    },
    {
        id: 45,
        nombre: "2 Timoteo",
        autor: "Pablo",
        anioPublicacion: 64
    },
    {
        id: 46,
        nombre: "Tito",
        autor: "Pablo",
        anioPublicacion: 63
    },
    {
        id: 47,
        nombre: "Filemón",
        autor: "Pablo",
        anioPublicacion: 60
    },
    {
        id: 48,
        nombre: "Hebreos",
        autor: "Desconocido (Tradicionalmente atribuido a Pablo)",
        anioPublicacion: 65
    },
    {
        id: 49,
        nombre: "Santiago",
        autor: "Santiago",
        anioPublicacion: 45
    },
    {
        id: 50,
        nombre: "1 Pedro",
        autor: "Pedro",
        anioPublicacion: 64
    },
    {
        id: 51,
        nombre: "2 Pedro",
        autor: "Pedro",
        anioPublicacion: 67
    },
    {
        id: 52,
        nombre: "1 Juan",
        autor: "Juan",
        anioPublicacion: 90
    },
    {
        id: 53,
        nombre: "2 Juan",
        autor: "Juan",
        anioPublicacion: 90
    },
    {
        id: 54,
        nombre: "3 Juan",
        autor: "Juan",
        anioPublicacion: 90
    },
    {
        id: 55,
        nombre: "Judas",
        autor: "Judas",
        anioPublicacion: 65
    },
    {
        id: 56,
        nombre: "Apocalipsis",
        autor: "Tradicionalmente atribuido a Juan",
        anioPublicacion: 95
    }
];
//manejo de JSON
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

//endpoint 1 obtener todos los libros
app.get('/libros', (req, res) => {
    res.json(librosBiblicos);
});
// endpoint 2 obtener libro por ID
app.get('/libros/:id', (req, res) => {
    const idCapturado = parseInt(req.params.id);
    console.log(idCapturado);
    const libroEncontrado = librosBiblicos.find((libro) => libro.id === idCapturado);
    if (libroEncontrado) {
        res.json(libroEncontrado);
    } else {
        res.status(404).json({ mensaje: 'Libro no encontrado' });
    }
});
// endpoint 3 Agregar un libro
app.post('/agregar-libro', (req, res) => {
    const nuevoLibro = req.body;
    console.log(nuevoLibro);
    librosBiblicos.push(nuevoLibro);
    res.status(201).json('este libro fue guardado exitosamente');
})
// endpoint 4 Actualizar el libro
app.put('/actualizar-libro/:id', (req, res) => {
    const idCapturado = parseInt(req.params.id);
    const indexLibroLocalizado = librosBiblicos.findIndex((libro) => libro.id === idCapturado);
    if (indexLibroLocalizado !== -1) {
        librosBiblicos[indexLibroLocalizado] = req.body;
        res.json(librosBiblicos[indexLibroLocalizado]);
    } else {
        res.status(404).json({ mensaje: 'Libro no encontrado' });
    }
});
// endpoint 5 Eliminar Libro
app.delete('/eliminar-libro/:id', (req, res) => {
    const id = parseInt(req.params.id);
    lBiblico = librosBiblicos.filter(libro => libro.id !== id);
    res.status(201).json({ mensaje: 'se ha eliminado el libro' });
    console.log(lBiblico);
});
//endpoint 6 
app.get('/libros/publicacion/:anio', (req, res) => {
    const year = parseInt(req.params.anio);
    const librosPublicados = librosBiblicos.filter(x => x.anioPublicacion === year);
    if (librosPublicados.length > 0) {
        res.json(librosPublicados);
    } else {
        res.status(404).json({ mensaje: 'no se han encontrado libros publicados en ese anio' });
    }
});

//endpoint 7
app.post('/libros/porAutor', (req, res) => {
    const autor = req.body.autor;
    const librosPublicados = librosBiblicos.filter(x => x.autor === autor);
    if (librosPublicados.length > 0) {
        res.json(librosPublicados);
    } else {
        res.status(404).json({ mensaje: 'no se han encontrado libros publicados con ese autor' });
    }
});

//endpoint 8
app.get('/cantidad', (req, res) => {
    var cantidad = 0;
    cantidad = librosBiblicos.length;
    res.json({ mensaje: 'La cantidad total de libros es: ' + cantidad });
});

//endpoint 9
app.post('/libros/porAutorJuan', (req, res) => {
    const nombre = req.body.nombre;
    const librosPublicados = librosBiblicos.filter(x => x.nombre.toLowerCase().includes(nombre.toLowerCase()));
    if (librosPublicados.length > 0) {
        res.json(librosPublicados);
    } else {
        res.status(404).json({ mensaje: 'no se han encontrado libros publicados con ese autor' });
    }
});

//endpoint 10
app.get('/ordenamientoPorNombre', (req, res) => {
    const librosOrdenados = ordenarPorNombre(librosBiblicos);
    if (librosOrdenados.length > 0) {
        res.json(librosOrdenados);
    } else {
        res.status(404).json({ mensaje: 'no se han encontrado libros publicados con ese autor' });
    }
});


function ordenarPorNombre(libros) {
    return libros.slice().sort((a, b) => {
        const nombreA = a.nombre.toLowerCase();
        const nombreB = b.nombre.toLowerCase();

        if (nombreA < nombreB) {
            return -1;
        }
        if (nombreA > nombreB) {
            return 1;
        }
        return 0;
    });
}



app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto http://localhost:" + PORT);
});