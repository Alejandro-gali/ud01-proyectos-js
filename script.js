// Ejercicio 1
//console.log("Hola Mundo");

// Ejercicio 2
//const nombre1 = "Ale";
//console.log(`Hola ${nombre1}, que tal?`);

// Ejercicio 3
//const nombre = window.prompt("Introduce tu nombre: ");
//console.log(`Hola ${nombre}, que tal?`);


// Ejercicio 4
function ejercicio4() {
    const edad = window.prompt("Introduce tu edad actual: ");

    if (edad >= 18) {
        console.log("Eres mayor de edad.");
    } else {
        console.log("Eres menor de edad.");
    }
}

// Definición de variables: let var const
// const: constante (su valor no varía)
// let: ámbito de bloque
// var: ámbito de función

// Ejercicio 5
function ejercicio5() {
    const edad1 = window.prompt("Introduce tu edad actual: ");

    if (edad1 >= 18) {
        let mensaje = "Eres mayor de edad";
        console.log(mensaje);
    } else {
        let mensaje = "Eres menor de edad";
        console.log(mensaje);
    }
}

// Llamamos a la función
//calcula_edad();

// Ejercicio 6
function ejercicio6() {
    let auxiliar;
    auxiliar = 10;
    console.log(auxiliar);

    auxiliar = "Mi casa es amarilla";
    console.log(auxiliar);

    auxiliar = false;
    console.log(auxiliar);
}

// Ejercicio 7: Función potencia
function ejercicio7(base, exponente) {
    let resultado = 1;

    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }

    return resultado;
}

let base = 3;
let exponente = 4;
//console.log(`El resultado de ${base} elevado a ${exponente} es igual a ${potencia(base, exponente)}`);


// Ejercicio 8: Mas bucles, solicita número y muestra el acumulado de 10 en 10
function ejercicio8(num_vueltas) {
    let result = 0;

    for (i = 0; i < num_vueltas; i++) {
        result += 10;
    }

    return result;
}

//console.log(`Ejercicio 8: ${ejercicio8(50)}`);

// Ejercicio 9: Más bucles, solicita número y muestra el acumulado de 10 en 10.
// Da error si introduces un negativo
function ejercicio9(num_vueltas) {
    let result = 0;

    if (num_vueltas < 0) {
        console.error(`El número introducido ha sido ${num_vueltas} y este no puede ser negativo`);
    } else {
        for (i = 0; i < num_vueltas; i++) {
            result += 10;
        }
    }

    return result;
}

//console.log(`Ejercicio 9: ${ejercicio9(-5)}`);

// Ejercicio 10: Calculadora. Pide dos números y muestra un menú para que los sumes,
// restes multipliques o dividessegún la opción marcada. Valida los datos.

function ejercicio10() {
    let num1 = parseInt(window.prompt("Introduzca el primer operando: "));
    let num2 = parseInt(window.prompt("Introduzca el segundo operando: "));

    let salir = false;

    do {
        let operación = window.prompt("Elija una operación: \n" +
            "a) Suma \n" +
            "b) Resta \n" +
            "c) Multiplicación \n" +
            "d) División \n " +
            "e) Potencia \n " +
            "f) Salir");

        let resultado = 0;

        switch (operación) {
            case "a":
                resultado = num1 + num2;
                console.log(`${num1} + ${num2} = ${resultado}`);
                break;
            case "b":
                resultado = num1 - num2;
                console.log(`${num1} - ${num2} = ${resultado}`);
                break;
            case "c":
                resultado = num1 * num2;
                console.log(`${num1} * ${num2} = ${resultado}`);
                break;
            case "d":
                if (num2 == 0) {
                    console.error("No se puede dividir entre 0");
                } else {
                    resultado = num1 / num2;
                    console.log(`${num1} / ${num2} = ${resultado}`);
                }
                break;
            case "e":
                resultado = potencia(num1, num2);
                console.log(`${num1} ^ ${num2} = ${resultado}`);
                break;
            case "f":
                salir = true;
                break;
            default:
                console.log("Escoja una opción válida");
                break;
        }

    } while (!salir);

}

//ejercicio10();

//Ejercicio 11; ternario
function ejercicio11() {
    let precio = 150;
    console.log("Precio original" + precio);

    let edad = parseInt(window.prompt("Introduce tu edad"));

    /*if(edad >= 18){
        precio = precio*0.80;
    }else{
        precio = precio*0.75;
    }*/

    precio = (edad >= 18) ? precio * 0.80 : precio * 0.75;

    console.log("El precio tras el descuento es: " + precio);
}

//ejercicio11();

//Ejercicio 12: Pide el precio por pantalla. Si es superior a 50 euros
//el envio sale gratis. Si no 5€. El sistema debe mostrar al principio el precio original
//y al final el precio total
function ejercicio12() {
    let precio = parseInt(window.prompt("Introduce el precio "));
    console.log("El precio original es: " + precio)

    precio = (precio > 50) ? precio : precio + 5;
    console.log("El precio final es: " + precio);
}
//ejercicio12();

//Ejercicio 13: Crea un programa que cualcule un número aleatorio y pida al usuario
//numeros hasta que lo acierte. Al finalizar, si el numero de intentos es superior
//a 10 pintara por pantalla ¡has ganado! si es inferior.
function ejercicio13() {
    let num_aleat = Math.floor(Math.random() * 100 + 1);
    let numeroIntento;
    let intentos = 0;

    do {
        numeroIntento = parseInt(window.prompt("Adivina un número del 1 al 100: "));
        intentos++;

    } while (numeroIntento != num_aleat && intentos <= 15);

    let veredicto = (intentos > 10) ? "¡Has perdido!" : "¡Has ganado!";
    console.log(`${veredicto} con ${intentos} intentos.`);
}
//ejercicio13();

// Ejercicio 14: Pide números hasta introducir el 0 y pinta por pantalla
// el menor, el mayor y la media.

function ejercicio14() {
    let numero;
    let mayor = 0;
    let menor = Infinity;
    let acumulador = 0;
    let contador = 0;

    do {

        numero = parseInt(window.prompt("Introduce un número (0 En caso de querer terminar): "));
        contador++;
        acumulador += numero;

        if (numero > mayor) {
            mayor = numero;
        }

        if (numero < menor && numero != 0) {
            menor = numero;
        }

    } while (numero != 0);

    let media = acumulador / contador;

    console.log(`El mayor número introducido ha sido el ${mayor},
                El menor número introducido ha sido el ${menor}
                y la media de los números introducidos es ${media}`
    );
}

// ejercicio14();

//Ejemplo 15: Pide una nota numérica y muestra por pantalla si es Suspenso [0-5],
// Suficiente[5-6], Bien[6-7], Notable [7-9], Sobresaliente [9-10]

function ejercicio15() {
    let nota = parseInt(window.prompt("Introduzca una nota: "));

    if (nota >= 0 && nota < 5) {
        console.log("Suspenso.");
    } else if (nota >= 5 && nota < 6) {
        console.log("Suficiente.");
    } else if (nota >= 6 && nota < 7) {
        console.log("Bien.");
    } else if (nota >= 7 && nota < 9) {
        console.log("Notable.");
    } else if (nota >= 9 && nota <= 10) {
        console.log("Sobresaliente.");
    } else {
        console.error("Introduzca un valor correcto.");
    }
}

// ejercicio15();

//Ejemplo 16: Pide un numero por pantalla y muestra el numero de digitos qu tiene.

function ejercicio16(){
    
}
//Ejemplo 17: Calcula el factorial de un número solicitado por pantalla siempre
// y cuando este número sea positivo y par.

//Ejemplo 18: Pide un numero por pantalla e imprimelo invertido

//Ejemplo 19: Muestra todos los divisores de un numero solicitado por pantalla

//Ejemplo 20: Numero perfecto: Pide un número y determina si es perfecto. Un
// número es perfecto cuando la suma de sus divisores propios sea igual al propio num