const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + 'dist/mpcfontend'));

// Toujours retourner a l'application peut importe la route indiquer

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname+'dist/mpcfontend/index.html'));
})

// indiquer le port choisi par heroku pour demarrer l'application

app.listen(process.env.PORT);