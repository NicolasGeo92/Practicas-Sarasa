const modal = document.querySelector(".modal");
const pokemonSeleccionado = document.querySelector("p")
const aceptar = document.querySelector(".boton");

const pokemonElegido = document.querySelectorAll("[name='pokemon']");
let botonCombatir = document.getElementById("btn-combatir");

const pokemons = [{ nombre: "Pikachu", tipo: "Electrico" },
{ nombre: "Charmander", tipo: "Fuego" },
{ nombre: "Milo", tipo: "Peludo" },
{ nombre: "Homero", tipo: "Intenso" }
]

function verPokemones() {
    const pokemones = document.querySelectorAll(".ver-pokemon");

    for (let i = 0; i < pokemones.length; i++) {
        pokemones[i].addEventListener("click", function () {
            modal.style.display = "grid";
            pokemonSeleccionado.textContent = (`${pokemons[i].nombre}  -  ${pokemons[i].tipo}`);
        });
    };
}

function botonAceptar() {
    aceptar.addEventListener("click", function () {
        modal.style.display = "none";
    });
}

function habilitarBoton() {
    for (let i = 0; i < pokemonElegido.length; i++) {
        pokemonElegido[i].addEventListener("change", function () {
            if (pokemonElegido[i].checked) {
                botonCombatir.disabled = false;
            }
            botonCombatir.addEventListener("click", function () {
                window.location.href = `sarasa.html?Pokemon=${pokemons[i].nombre}`;
            });
        });
    }
}

habilitarBoton();
botonAceptar();
verPokemones();