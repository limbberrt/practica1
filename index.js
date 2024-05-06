//express
const express = require('express');
const app = express();
const PORT = 3100; 

//BIENVENIDA
    let bienvenida = 
    {nombre: 'limbert', profecion: 'Sistemas'};

    app.use(express.json());

    app.get('/saludo', (req, res) => {
        res.json(bienvenida);
    });


    app.get('/libros/:autor',(req, res) => {
        const autorCapturado = req.params.autor;
        console.log(autorCapturado);
        const autorEncontrado = librosBiblicos.find((autor) => autor.autor === autorCapturado);
        if (autorEncontrado) {
            res.json(autorEncontrado);
        } else {
            res.status(404).json({mensaje : 'Autor no encontrado'});
        }
    });

    app.get('/todos-libros', (req, res) => {
        res.json(librosBiblicos);
    });

    app.get('/libros/:nombre',(req, res) => {
        const nombreCapturado = req.params.nombre;
        console.log(nombreCapturado);
        const nombreEncontrado = librosBiblicos.find((nombre) => nombre.nombre === nombreCapturado);
        if (nombreEncontrado) {
            res.json(nombreEncontrado);
        } else {
            res.status(404).json({mensaje : 'Nombre no encontrado'});
        }
    });
 
app.get('/libros/publicacion/:nombre', (req, res) => {
    const name =  req.params.nombre;
    const namePublicados = librosBiblicos.filter( x => x.namePublicacion === name);
    if (namePublicados.length > 0) {
        res.json(namePublicados);
    } else {
        res.status(404).json({mensaje : 'no se han encontrado '});
    }
});

let librosBiblicos = [
    {id: 1 , nombre: 'Genesis', autor: 'Moises', anioPublicacion: 2020},
    {id: 2 , nombre: 'Exodo', autor: 'San Juan', anioPublicacion: 2024},
    {id: 3 , nombre: 'Levitico', autor: 'Pedro', anioPublicacion: 1990},
];


app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto http://localhost:" + PORT);
});








