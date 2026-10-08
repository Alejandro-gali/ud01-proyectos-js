// Ejercicio 5: Introduce un número de segundos.
// Introduce un mensaje
// Dicho mensaje debe aparecer por alert transcurrido esos segundos
function ej05() {
    const segundos = parseInt(window.prompt("Introduce un número de segundos. "));
    const mensaje = window.prompt("Introduce un mensaje para representar. ");

    setTimeout(() => window.alert(mensaje), segundos * 1000);

}
// ej05();

// Ejercicio 6: Modifica el ejercicio anterior para que mientras 
// muestre el mensaje se muestre por consola la cuenta atras 
// antes de pintarse el mensaje.
// setInterval() + clearInterval().
function ej06() {
    const segundos = parseInt(window.prompt("Introduce un número de segundos. "));
    const mensaje = window.prompt("Introduce un mensaje para representar. ");

    let contador = segundos;

    const interval = setInterval(() => {
        console.log(contador);
        contador--;

        if (contador === 0) {
            clearInterval(interval);
        }

    }, 1000);
    
    setTimeout(() => window.alert(mensaje), segundos * 1000);

}
ej06();