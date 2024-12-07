'use strict'

var pelicula = {
    titulo: "Ouija",
    pais: "Mexico",
    año: 2000,
}

var peliculas = {
    titulo: "Interestelar",
    pais: "Masssachuset",
    año: 1998,
}

var peliculas2 = {
    titulo: "Creed",
    pais: "Estados Unidos",
    año: 2015,
}

var peliculas3 = {
    titulo: "Creed2",
    pais: "Estados Unidos",
    año: 2015,
}


var caja_peliculas = document.querySelector('#peliculas')
var caja_peliculas1 = document.querySelector('#peliculas1')
var caja_peliculas2 = document.querySelector('#peliculas2')
var caja_peliculas3 = document.querySelector('#peliculas3')
var index
for (index in peliculas){
    var p = document.createElement("p")
    var p1 = document.createElement("p")
    var p2 = document.createElement("p")
    var p3 = document.createElement("p")

    caja_peliculas.append(p)
    caja_peliculas1.append(p1)
    caja_peliculas2.append(p2)
    caja_peliculas3.append(p3)
    
    p.append(pelicula[index])
    p1.append(peliculas[index])
    p2.append(peliculas2[index])
    p3.append(peliculas3[index])
}
/*var caja_peliculas = document.querySelector('#peliculas3')
var pelis = [
    {titulo: "peliculas1"},
    {titulo: "peliculas1"},
    {titulo: "peliculas1"}
]
for (let pelic of pelis ){
    var p= document.createElement("p")
    p.textContent = pelic.titulo
    caja_peliculas(p)
}*/


/*var caja_pelicula = document.querySelector('#peliculas')
var index
for (index in pelicula){
    var p = document.createElement("p")
    p.append(pelicula[index])
    //p.append(pelicula[index.año])
    caja_pelicula.append(p)
}*/

/*var caja_peliculas1 = document.querySelector('#peliculas1')
var index2
for (index2 in peliculas){
    var g = document.createElement("g")
    g.append(peliculas[index2])
    //g.append(peliculas[index.año])
    caja_peliculas1.append(g)
}*/