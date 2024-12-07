'use strict'

function sumame (numero1,numero2, suma_muestra, sumaPor){
    var sumar = numero1+numero2
    suma_muestra(sumar)
    sumarPor(sumar)
    return sumar;
}

sumame(5, 7, function(dato){
    console.log("la suma es ",dato)
},
function(dato){}
)