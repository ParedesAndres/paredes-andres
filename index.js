const express = require('express');
const fs = require('fs');
const app = express();
const hbs = require('express-handlebars');

app.use(express.static('public'));
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

var pagea = 0;
var pageb = 0;
var pagec = 0;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
app.use(express.json());




app.get('/', function(request, response){
    // Se utiliza el comando send para enviar el HTML
    response.render('home');
});

app.get('/page-a', function(request, response){
    // Se utiliza el comando send para enviar el HTML
    response.render('page-a');
    pagea++;
    contarVisitantes()

});

app.get('/page-b', function(request, response){
    // Se utiliza el comando send para enviar el HTML
    response.render('page-b');
    pageb++;
    contarVisitantes()
});

app.get('/page-c', function(request, response){
    // Se utiliza el comando send para enviar el HTML
    response.render('page-c');
    pagec++;
    contarVisitantes()
});



function contarVisitantes() {
    var message = "Pagina a: "+pagea+"Pagina b: "+pageb+"Pagina c: "+pagec;

    const data = new Uint8Array(Buffer.from(message));
    fs.writeFile('reporte.txt', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}


app.listen(5500);