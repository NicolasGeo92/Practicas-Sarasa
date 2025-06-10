function jugandoAlPiedraPapelOTijera() {
    let piedraPapelTijera = new Array("piedra", "papel", "tijera");
    let mensaje;
    let aleatorio;

    let ganados = 0;
    let perdidos = 0;

    do {
        let mensaje = prompt("Elija entre piedra, papel o tijera al mejor de 5");

        let aleatorio = Math.random() * piedraPapelTijera.length;
        aleatorio = Math.floor(aleatorio);

        if (mensaje.toLowerCase() === "piedra") {
            switch (piedraPapelTijera[aleatorio]) {
                case "tijera":
                    console.log("----------------------------------------------------");
                    console.log("¡Ganaste!");
                    ganados++;
                    break;
                case "papel":
                    console.log("----------------------------------------------------");
                    console.log("Perdiste");
                    perdidos++;
                    break;
                case "piedra":
                    console.log("----------------------------------------------------");
                    console.log("Empate");
                    break;
            }
        }

        if (mensaje.toLowerCase() === "papel") {
            switch (piedraPapelTijera[aleatorio]) {
                case "piedra":
                    console.log("----------------------------------------------------");
                    console.log("¡Ganaste!");
                    ganados++;
                    break;
                case "tijera":
                    console.log("----------------------------------------------------");
                    console.log("Perdiste");
                    perdidos++;
                    break;
                case "papel":
                    console.log("----------------------------------------------------");
                    console.log("Empate");
                    break;
            }
        }

        if (mensaje.toLowerCase() === "tijera") {
            switch (piedraPapelTijera[aleatorio]) {
                case "papel":
                    console.log("----------------------------------------------------");
                    console.log("¡Ganaste!");
                    ganados++;
                    break;
                case "piedra":
                    console.log("----------------------------------------------------");
                    console.log("Perdiste");
                    perdidos++;
                    break;
                case "tijera":
                    console.log("----------------------------------------------------");
                    console.log("Empate");
                    break;
            }
        } 
    
        if ((mensaje.toLowerCase() !== piedraPapelTijera[0]) && (mensaje.toLowerCase() !== piedraPapelTijera[1]) && (mensaje.toLowerCase() !== piedraPapelTijera[2])) {
            console.log("----------------------------------------------------");
            console.log("Escribiste cualquier cosa");
        }

        console.log("Elegiste: " + mensaje);
        console.log("La IA eligió: " + piedraPapelTijera[aleatorio]);
        console.log("Ganados: " + ganados);
        console.log("Perdidos: " + perdidos);

    } while (ganados !== 3 && perdidos !== 3);
}

jugandoAlPiedraPapelOTijera();

//piedra > tijera
//piedra < papel

//tijera > papel
//tijera < piedra

//papel > piedra
//papel < tijera