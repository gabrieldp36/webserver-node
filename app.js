require('dotenv').config();

const express = require('express');

const hbs = require('hbs');

const app = express();

const port = process.env.PORT;

// Handelbars.

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático.
 
app.use( express.static('public') );

// Definimos nuestras rutas.

app.get('/', (req, res) => {

    // res.sendFile(__dirname + '/public/index.html');

    res.render('home', {
        nombre: 'Alumno: Gabriel Domínguez Prado',
        titulo: 'Curso de Node | ',
        tituloWeb: 'Curso de Node',
    });
});

app.get('/generic', (req, res) => {

    // res.sendFile(__dirname + '/public/generic.html');

    res.render('generic', {
        nombre: 'Alumno: Gabriel Domínguez Prado',
        titulo: 'Curso de Node | ',
        tituloWeb: 'Curso de Node',
    });
});

app.get('/elements', (req, res) => {

    // res.sendFile(__dirname + '/public/elements.html');

    res.render('elements', {
        nombre: 'Alumno: Gabriel Domínguez Prado',
        titulo: 'Curso de Node | ',
        tituloWeb: 'Curso de Node',
    });
});

app.get('*', (req, res) => {

    // res.sendFile(__dirname + '/public/404.html');

    res.render('404', {
        nombre: 'Alumno: Gabriel Domínguez Prado',
        titulo: 'Curso de Node | ',
        tituloWeb: 'Curso de Node',
    });
});
 
app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`);
});