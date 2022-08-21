const express = require('express');
const app = express();

app.get('/', function(req,res){
	// res -> response, req -> request
	res.send('ok')
})

app.listen(3000,function(){})

// En el caso de querer otras direcciones puedes repetir el proceso de app.get()
//
// Si ya sabes esto te aconsejo que busques sobre otros metodos además del 'get' como el 'post'
//
// o que pruebes a usar res.status(200).send('ok')
//
//y en el caso de querer enviar un archivo revisa la funcionalidad de express 'express.static()'
