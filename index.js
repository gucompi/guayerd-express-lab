const express = require('express');

//Instancia de App Express
const app = express();

const PORT  = '4200';




let logger = function(req,res,next){
    //DO SOMETHING
    console.log("Realizaron una peticion");
    res.send("NO PASAS");
    return;
    next();
}

app.use(logger);


let libros = [
    {
        "titulo": "100 años de soledad",
        "id": 1
    },
    {
        "id": 2,
        "titulo": "El amor en los tiempos del colera",
        "autor_id": 1,
        "editorial": "Narrativa Actual",
        "anio": 1993
    },
    {
        "id": 3,
        "titulo": "El Principito",
        "autor_id": 2,
        "editorial": "Salamandra",
        "anio": 2001
    }
];

//Particularidades de la instancia
// Comenzar a explicar los Endpoints / Entradas / Salidas / Controladores

// app.metodo('puerta-de-salida',function(req,res){})




app.get('/',function(req,res){
    //REQ es el objeto donde está TODO lo relativo a la solicitud / peticion
        //REQ ==> body
        //REQ ==> headers
        //REQ ==> params ==> LA URL



    //RES es el objeto donde están todas las herramientas para manejar la RESPUESTA

    res.send({"saludo":'Hello World'}).status(200);
    
});


app.post('/',function(req,res){
    res.send({"saludo":"Hola, Se que viniste por POST"}).status(200);
})


app.get('/libros',function(req,res){
    res.send(libros).status(200);
})



app.get('/libros/:id',function(req,res){
    let id = req.params.id;
    let libro = libros[id-1];
    if(!libro) {res.status(404).send({err:"No encontrado"});}
    res.status(201).send(libro);
})









app.listen(PORT,function(){
    console.log(`Server up and running in port ${PORT}. Visit http://localhost:${PORT}/ to see.`);
})


