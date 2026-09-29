// 1. Datos personales. Declara variables para almacenar tu nombre, 
// edad y ciudad. Muestra por consola una frase con esos datos.

function ej01() {
    const nombre = "Alejandro";
    const edad = 19;
    const ciudad = "Sevilla";

    console.log(`Mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);
}

// ej01();

// 2. Área de un rectángulo. Declara las variables necesarias para 
// almacenar la base y la altura de un rectángulo y calcula su área.

function ej02() {
    let base = 6;
    let altura = 5;

    let area = base * altura;

    console.log(area);
}

// ej02();

// 3. Conversión de temperatura. Dada una temperatura en grados Celsius, 
// calcula y muestra su equivalente en grados Fahrenheit.

function ej03() {
    const Celsius = parseFloat(window.prompt("Introduzca una temperatura en Celsius: "));

    let Fahrenheit = (Celsius * 1.8) + 32;
    console.log(`${Celsius} grados Celsius son ${Fahrenheit} grados Fahrenheit.`);
}

// ej03();

// 4. Precio de una compra. Dado el precio de un producto y el número de 
// unidades compradas, calcula y muestra el importe total.

function ej04() {
    const precio = parseFloat(window.prompt("Introduzca el precio del producto: "));
    const producto = parseInt(window.prompt("Introduzca el número de unidades de producto adquirido: "));

    console.log(`El importe total es: ${precio * producto}€`);
}

// ej04();

//5. Nómina sencilla. Dado un salario bruto, calcula una retención 
// del 15 % y muestra el salario neto.

function ej05() {
    const salario_bruto = parseFloat(window.prompt("Introduzca el salario bruto: "));

    console.log(`El salario neto tras la retención del 15% es ${salario_bruto * 0.85}€`);
}

// ej05();

// 6. Conversión de segundos. Dado un número de segundos, calcula 
// cuántas horas, minutos y segundos representa.

function ej06() {
    const total_segundos = parseInt(window.prompt("Introduzca un número en segundos: "));

    const horas = Math.floor(total_segundos/3600);
    const resto_horas = Math.floor(total_segundos%3600);

    const minutos = Math.floor(resto_horas/60);
    const resto_minutos = Math.floor(minutos%60);

    const segundos = resto_minutos;

    console.log(`El total de segundos introducidos equivalen a: \n` + 
                `${horas} horas \n` +
                `${minutos} minutos \n` +
                `${segundos} segundos` 
    );
}

ej06();

// 7. Intercambio de valores. Declara dos variables a y b e intercambia 
// sus valores. Muestra el resultado antes y después del intercambio.

function ej07() {
    let a = parseInt(window.prompt("Introduzca el valor de a: "));
    let b = parseInt(window.prompt("Introduzca el valor de b: "));;
    console.log("Valores previos al cambio: \n",
        "a = " + a + "\n",
        "b = " + b
    );

    let c = a;
    a = b;
    b = c;
    console.log("Valores tras el cambio: \n",
        "a = " + a + "\n",
        "b = " + b
    );

}

// ej07();

// 8. Mayor de edad. Dada una edad, indica mediante un mensaje si la 
// persona es mayor o menor de edad.

function ej08() {
    const edad = parseInt(window.prompt("Introduzca su edad: "));

    if (edad <= 0 || edad > 100) {
        console.error("La edad introducida no es posible.");
    } else if (edad >= 18) {
        console.log("Es mayor de edad.");
    } else {
        console.log("Es menor de edad.");
    }
}

// ej08();

// 9. Número positivo, negativo o cero. Dado un número, indica si es 
// positivo, negativo o igual a cero.

function ej09() {
    const numero = parseFloat(window.prompt("Introduzca un número: "));

    if (numero > 0) {
        console.log(`El número ${numero} es positivo.`);
    } else if (numero < 0) {
        console.log(`El número ${numero} es negativo.`);
    } else {
        console.log("El número introducido es 0");
    }
}

// ej09();

// 10. Número mayor. Dados dos números, muestra cuál de ellos es mayor 
// o indica si son iguales.

function ej10() {
    const num1 = parseFloat(window.prompt("Introduzca el primer número: "));
    const num2 = parseFloat(window.prompt("Introduzca el segundo número: "));

    if (num1 > num2) {
        console.log(`El número ${num1} es mayor que el número ${num2}.`);
    } else if (num2 > num1) {
        console.log(`El número ${num2} es mayor que el número ${num1}.`);
    } else {
        console.log("Los números son iguales.");
    }
}

// ej10();

// 11. Calificación. Dada una nota entre 0 y 10, muestra si corresponde 
// a un suspenso, aprobado, notable o sobresaliente.

function ej11(){
    const nota = parseFloat(window.prompt("Introduzca la nota: "));

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

// ej11();

// 12. Año bisiesto. Dado un año, determina si es bisiesto.

function ej12(){
    const anio = parseInt(window.prompt("Introduzca un año: "));

    if(anio % 4 == 0 && anio % 100 != 0){
        console.log(`El año ${anio} es bisiesto.`);
    } else {
        console.log(`El año ${anio} no es bisiesto.`);
    }
}

// ej12();

