'use strict'
//
function calculadora() {
    // Pedimos al usuario los dos números
    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));

    if (numero1 <= 0 || numero2 <= 0) {
        console.log("Error: Los números deben ser positivos.");
    } else {
        // Si ambos números son válidos y positivos, realizamos la suma
        let suma = numero1 + numero2;
        let resta = numero1 - numero2;
        let multiplicacion = numero1 * numero2;
        let division = numero1 / numero2
        console.log("La suma es: " + suma);
        console.log("La resta es: " + resta);
        console.log("La multiplicacion es: " + multiplicacion);
        console.log("La division es: " + division);
    }
}

// Llamamos a la función 
calculadora();