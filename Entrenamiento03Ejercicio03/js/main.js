// const countries = [
//   { name: "Argentina", abbreviation: "AR", continent: "América del Sur", flag: "🇦🇷", language: "Español" },
//   { name: "Australia", abbreviation: "AU", continent: "Oceanía", flag: "🇦🇺", language: "Inglés" },
//   { name: "Brasil", abbreviation: "BR", continent: "América del Sur", flag: "🇧🇷", language: "Portugués" },
//   { name: "Canadá", abbreviation: "CA", continent: "América del Norte", flag: "🇨🇦", language: "Inglés, Francés" },
//   { name: "China", abbreviation: "CN", continent: "Asia", flag: "🇨🇳", language: "Chino" },
//   { name: "Colombia", abbreviation: "CO", continent: "América del Sur", flag: "🇨🇴", language: "Español" },
//   { name: "Egipto", abbreviation: "EG", continent: "África", flag: "🇪🇬", language: "Árabe" },
//   { name: "España", abbreviation: "ES", continent: "Europa", flag: "🇪🇸", language: "Español" },
//   { name: "Francia", abbreviation: "FR", continent: "Europa", flag: "🇫🇷", language: "Francés" },
//   { name: "Alemania", abbreviation: "DE", continent: "Europa", flag: "🇩🇪", language: "Alemán" },
//   { name: "India", abbreviation: "IN", continent: "Asia", flag: "🇮🇳", language: "Hindi, Inglés" },
//   { name: "Indonesia", abbreviation: "ID", continent: "Asia", flag: "🇮🇩", language: "Indonesio" },
//   { name: "Irlanda", abbreviation: "IE", continent: "Europa", flag: "🇮🇪", language: "Inglés, Irlandés" },
//   { name: "Italia", abbreviation: "IT", continent: "Europa", flag: "🇮🇹", language: "Italiano" },
//   { name: "Japón", abbreviation: "JP", continent: "Asia", flag: "🇯🇵", language: "Japonés" },
//   { name: "Kenia", abbreviation: "KE", continent: "África", flag: "🇰🇪", language: "Inglés, Suajili" },
//   { name: "México", abbreviation: "MX", continent: "América del Norte", flag: "🇲🇽", language: "Español" },
//   { name: "Marruecos", abbreviation: "MA", continent: "África", flag: "🇲🇦", language: "Árabe, Bereber" },
//   { name: "Nueva Zelanda", abbreviation: "NZ", continent: "Oceanía", flag: "🇳🇿", language: "Inglés, Maorí" },
//   { name: "Nigeria", abbreviation: "NG", continent: "África", flag: "🇳🇬", language: "Inglés" },
//   { name: "Noruega", abbreviation: "NO", continent: "Europa", flag: "🇳🇴", language: "Noruego" },
//   { name: "Pakistán", abbreviation: "PK", continent: "Asia", flag: "🇵🇰", language: "Urdu, Inglés" },
//   { name: "Perú", abbreviation: "PE", continent: "América del Sur", flag: "🇵🇪", language: "Español" },
//   { name: "Filipinas", abbreviation: "PH", continent: "Asia", flag: "🇵🇭", language: "Filipino, Inglés" },
//   { name: "Polonia", abbreviation: "PL", continent: "Europa", flag: "🇵🇱", language: "Polaco" },
//   { name: "Portugal", abbreviation: "PT", continent: "Europa", flag: "🇵🇹", language: "Portugués" },
//   { name: "Reino Unido", abbreviation: "GB", continent: "Europa", flag: "🇬🇧", language: "Inglés" },
//   { name: "Rusia", abbreviation: "RU", continent: "Europa/Asia", flag: "🇷🇺", language: "Ruso" },
//   { name: "Arabia Saudita", abbreviation: "SA", continent: "Asia", flag: "🇸🇦", language: "Árabe" },
//   { name: "Corea del Sur", abbreviation: "KR", continent: "Asia", flag: "🇰🇷", language: "Coreano" },
//   { name: "Sudáfrica", abbreviation: "ZA", continent: "África", flag: "🇿🇦", language: "Inglés, Afrikáans, Zulu" },
//   { name: "Suecia", abbreviation: "SE", continent: "Europa", flag: "🇸🇪", language: "Sueco" },
//   { name: "Suiza", abbreviation: "CH", continent: "Europa", flag: "🇨🇭", language: "Alemán, Francés, Italiano" },
//   { name: "Tailandia", abbreviation: "TH", continent: "Asia", flag: "🇹🇭", language: "Tailandés" },
//   { name: "Turquía", abbreviation: "TR", continent: "Asia/Europa", flag: "🇹🇷", language: "Turco" },
//   { name: "Ucrania", abbreviation: "UA", continent: "Europa", flag: "🇺🇦", language: "Ucraniano" },
//   { name: "Emiratos Árabes Unidos", abbreviation: "AE", continent: "Asia", flag: "🇦🇪", language: "Árabe" },
//   { name: "Estados Unidos", abbreviation: "US", continent: "América del Norte", flag: "🇺🇸", language: "Inglés" },
//   { name: "Uruguay", abbreviation: "UY", continent: "América del Sur", flag: "🇺🇾", language: "Español" },
//   { name: "Vietnam", abbreviation: "VN", continent: "Asia", flag: "🇻🇳", language: "Vietnamita" },
//   { name: "Venezuela", abbreviation: "VE", continent: "América del Sur", flag: "🇻🇪", language: "Español" },
//   { name: "Chile", abbreviation: "CL", continent: "América del Sur", flag: "🇨🇱", language: "Español" },
//   { name: "Sudán", abbreviation: "SD", continent: "África", flag: "🇸🇩", language: "Árabe, Inglés" },
//   { name: "Israel", abbreviation: "IL", continent: "Asia", flag: "🇮🇱", language: "Hebreo, Árabe" },
//   { name: "Bangladesh", abbreviation: "BD", continent: "Asia", flag: "🇧🇩", language: "Bengalí" },
//   { name: "Singapur", abbreviation: "SG", continent: "Asia", flag: "🇸🇬", language: "Inglés, Chino, Malayo, Tamil" },
//   { name: "Grecia", abbreviation: "GR", continent: "Europa", flag: "🇬🇷", language: "Griego" },
//   { name: "Finlandia", abbreviation: "FI", continent: "Europa", flag: "🇫🇮", language: "Finés, Sueco" },
//   { name: "Austria", abbreviation: "AT", continent: "Europa", flag: "🇦🇹", language: "Alemán" },
//   { name: "Bélgica", abbreviation: "BE", continent: "Europa", flag: "🇧🇪", language: "Holandés, Francés, Alemán" },
//   { name: "Hungría", abbreviation: "HU", continent: "Europa", flag: "🇭🇺", language: "Húngaro" }
// ];


function cambiarBackground() {
    //No se puede usar addEventListener con un nodeList (querySelectorAll).
    const cambiarBackgroundDelArticle = document.querySelectorAll(".pais");

    for (let i = 0; i < cambiarBackgroundDelArticle.length; i++) {
        cambiarBackgroundDelArticle[i].addEventListener("mouseover", function () {
            //document.querySelectorAll(".pais")[i].style.backgroundColor = "red";
            this.style.backgroundColor = "red";
            //El this hace referencia al elemento que disparó el evento.
        });
    }

    for (let i = 0; i < cambiarBackgroundDelArticle.length; i++) {
        cambiarBackgroundDelArticle[i].addEventListener("mouseout", function () {
            this.style.backgroundColor = "aqua";
            //El this hace referencia al elemento que disparó el evento.
        });
    }
}

cambiarBackground();

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