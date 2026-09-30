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

    const horas = Math.floor(total_segundos / 3600);
    const resto_horas = Math.floor(total_segundos % 3600);

    const minutos = Math.floor(resto_horas / 60);
    const resto_minutos = Math.floor(minutos % 60);

    const segundos = resto_minutos;

    console.log(`El total de segundos introducidos equivalen a: \n` +
        `${horas} horas \n` +
        `${minutos} minutos \n` +
        `${segundos} segundos`
    );
}

// ej06();

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

function ej11() {
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

function ej12() {
    const anio = parseInt(window.prompt("Introduzca un año: "));

    if (anio % 4 == 0 && anio % 100 != 0) {
        console.log(`El año ${anio} es bisiesto.`);
    } else {
        console.log(`El año ${anio} no es bisiesto.`);
    }
}

// ej12();

// 13. Calculadora. Dados dos números y un operador (+, -, * o /), 
// realiza la operación correspondiente utilizando una estructura de 
// selección.

function ej13() {
    const numero1 = parseFloat(window.prompt("Introduzca el primer número: "));
    const numero2 = parseFloat(window.prompt("Introduzca el segundo número"));

    const operador = window.prompt("Escoja un operador para realizar la operación (+, -, * o /): ");

    switch (operador) {
        case "+":
            console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);
            break;
        case "-":
            console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`);
            break;
        case "*":
            console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`);
            break;
        case "/":
            console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
            break;
        default:
            console.error("Operación inválida.");
    }
}

// ej13();

// 14. Números del 1 al 10. Muestra por consola los números del 1 al 10 
// utilizando una estructura de repetición.

function ej14() {

    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// ej14();

// 15. Números pares. Muestra todos los números pares comprendidos 
// entre 1 y 100.

function ej15() {

    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

// ej15();

// 16. Tabla de multiplicar. Dado un número, muestra su tabla de 
// multiplicar del 1 al 10.

function ej16() {
    const numero = parseInt(window.prompt("Introduzca un número para ver su tabla de multiplicar: "));

    console.log(`Tabla de multiplicar del ${numero}:`);

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} * ${i} = ${numero * i}`);
    }
}

// ej16();

// 17. Suma hasta N. Dado un número N, calcula la suma de todos los 
// números comprendidos entre 1 y N.

function ej17() {
    const n = parseInt(window.prompt("Introduzca un número para ver todos los valores comprendidos entre 1 y su número:"));

    let suma = 0;

    for (let i = 2; i < n; i++) {
        console.log(i);
        suma += i;
    }

    console.log(`La suma de todos los números comprendidos entre 1 y ${n} es: ${suma}`);
}

// ej17(); 

// 18. Factorial. Dado un número entero positivo, calcula y muestra 
// su factorial.

function ej18() {
    const numero = parseInt(window.prompt("Introduzca un número para calcular su factorial: "));
    let factorial = 1;

    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }

    console.log(`El factorial de ${numero} es ${factorial}`);
}

// ej18();

// 19. Múltiplos de 3. Dado un número N, muestra todos los múltiplos 
// de 3 comprendidos entre 1 y N.

function ej19() {
    const numero = parseInt(window.prompt("Introduzca un número para ver todos los múltiplos de 3 comprendidos entre 1 y su numero: "));

    for (let i = 2; i < numero; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

// ej19();

// 20. Función saludar. Crea una función saludar(nombre) que reciba un 
// nombre como parámetro y muestre un saludo personalizado.

function ej20() {
    const nombre = window.prompt("Escriba su nombre: ");

    function saludar(nombre){
        console.log(`Bienvenido al sistema ${nombre}!`);
    }
    saludar();
}

ej20();