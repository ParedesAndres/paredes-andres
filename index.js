const express = require('express');
const fs = require('fs');
const app = express();
const hbs = require('express-handlebars');

app.use(express.static('public'));
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
app.use(express.json());


app.get('/', function(request, response){
    // Se utiliza el comando send para enviar el HTML
    response.send(`
    <h1>BIENVENIDO</h1>
    <P>En esta página podrás encontrar todas las páginas, solo da click ¡Fácil ¿no?!</P>
    <a href="page-a">PAGINA A</a>
    <a href="page-b">PAGINA B</a>
    <a href="page-c">PAGINA VC</a>
    `);
});

app.get('/page-a', function(request, response){
    // Se utiliza el comando send para enviar el HTML
    response.render('page-a');
});

app.get('/page-b', function(request, response){
    // Se utiliza el comando send para enviar el HTML
    response.render('page-b');
});

app.get('/page-c', function(request, response){
    // Se utiliza el comando send para enviar el HTML
    response.render('page-c');
});

app.listen(5500);