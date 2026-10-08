// Ejercicio 1: Introduce un número de segundos.
// Introduce un mensaje
// Dicho mensaje debe aparecer por alert transcurrido esos segundos
function ej01() {
    const segundos = parseInt(window.prompt("Introduce un número de segundos. "));
    const mensaje = window.prompt("Introduce un mensaje para representar. ");

    setTimeout(() => window.alert(mensaje), segundos * 1000);

}
// ej01();

// Ejercicio 2: Modifica el ejercicio anterior para que mientras 
// muestre el mensaje se muestre por consola la cuenta atras 
// antes de pintarse el mensaje.
// setInterval() + clearInterval().
function ej02() {
    const segundos = parseInt(window.prompt("Introduce un número de segundos. "));
    const mensaje = window.prompt("Introduce un mensaje para representar. ");

    let contador = segundos;

    const interval = setInterval(() => {
        console.log(contador);
        contador--;

        if (contador == 0) {
            clearInterval(interval);
        }

    }, 1000);

    setTimeout(() => window.alert(mensaje), segundos * 1000);

}
// ej02();

// Ejercicio 3: Pide por prompt una URL y redirige a la página misma
function ej03() {
    const url = window.prompt("Introduzca una URL.");

    window.location.assign(url);
}
//ej03();

// Ejercicio 4: Muestra un menú con varias opciones:
// a. Ir atrás
// b. Ir hacia delante
// c. Ir a una dirección (Entonces la solicitará)
// d. Mostrar la dirección actual
// e. Actualizar la página
// f. No hacer nada. Salir.
function ej04() {

    const opcion = window.prompt("Menú de opciones: \n" +
        "a. Ir atrás. \n" +
        "b. Ir hacia delante. \n" +
        "c. Ir a una dirección. \n" +
        "d. Mostrar la dirección actual. \n" +
        "e. Actualizar la página. \n" +
        "f. Salir."
    );

    switch (opcion) {
        case "a":
            window.history.back();
            break;
        case "b":
            window.history.forward();
            break;
        case "c":
            ej03();
            break;
        case "d":
            console.log(window.location.href);
            break;
        case "e":
            window.location.reload();
            break;
        case "f":
            break;
        default:
            window.alert("El valor introducido no concuerda con ninguno de los presentados.");
            break;
    }
}
// ej04();

// Ejercicio 5: Al cargar la página consulta el nombre de usuario (username)
// almacenado en el localStorage. Si existe saluda, si no, lo pide.
function ej05() {
    let nombre = window.localStorage.getItem("username");
    if (nombre == null) {
        nombre = window.prompt("Introduzca su nombre de usuario.");
        window.localStorage.setItem("username", nombre);
    } else {
        console.log(`Bienvenido, ${nombre}.`);
    }
}
// ej05();

// Ejercicio 6: Contador de recargas. Cada vez que el usuario  abra la página,
// acceda o actualice debe incrementar el número de visitas.
let contador = window.localStorage.getItem("ContadorRecargas");
window.localStorage.clear();

function ej06() {
contador++;
window.localStorage.setItem("ContadorRecargas", contador);

console.log(`Contador: ${contador}.`);
}
// ej06();