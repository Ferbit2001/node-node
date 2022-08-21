# node-server

#Prerequisitos 

-Saber javascript (nociones basicas

-instalar npm y node en tu pc

  --- aviso ---  

- si quieres que a tu servidor pueda acceder otra persona desde otra red o desde una red en comun 

- tienes que aprender sobre puertos e ip publicas y privadas

- si ya sabes accede a tu router (no la cagues, tranquilito solo lo que digo) a seccion "internet" o "puertos" y abre el puerto que quieras utilizar para tu servidor, recomendado '3000', se accede yendo a la 192.168.0.1 y con la contraseña y usuario que dice atras del router

- si la cagaste, llama a tu operadora o resetea el router, o las dos

  --- fin del aviso ---


# Ahora sí empieza

 1 - Iniciamos npm
   
   - npm init
   
   - si les aparece algo le dan enter hasta que pare el proceso
   
   - Esto creará un archivo package.json

 2 - Instalamos express

   - npm install express

   - apareceran dos 1 carpeta y un archivo más

   - package-lock.json y node_modules/

 3 - creamos el archivo index.js ( donde estará el servidor )

   - en el escribimos "const express = require('express');"
  
   - posteriormente escribimos "const app = express();" este será el servidor que configuraremos primero antes de ponerlo en marcha

   - primero añadire que pasa cuando un usuario se conecta al servidor en una ruta mediante GET un metodo de obtener datos unicamente

   - "app.get('/ruta',function(req,res){})"

   - cambia ruta por donde quieras que acceda el usuario, yo lo dejare en '/' siendo que nada mas acceder al servidor pase lo que yo le diga en la function

   - "app.get('/', function(req,res){ res.send()  })"

   - como ven he añadido una funcion del parametro res 'response', el cual enviara una respuesta
  
   - "app.get('/', function(req,res){res.send('ok')})
   
   - y por ultimo escribe

   - "app.listen(3000, function(){})"

   - yo puse 3000 porque es el puerto que he abierto, en tu caso puedes poner el que quieras

   - si te mareaste viendo esto repasa javascript y vuelve o mira otros ejemplos, pero primero pruebalo que te digo, no pierdes nada.
  
   - pd: tu servidor estará en localhost:el_puerto_que_elegiste
