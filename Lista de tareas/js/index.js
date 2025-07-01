let tareas = [];

function cargarTareas() {
    const tareasGuardadas = localStorage.getItem("tareas");
    if (tareasGuardadas) {
        tareas = JSON.parse(tareasGuardadas);
        mostrarTareas();
    }
}

// 3. Mostrar tareas en el HTML
function mostrarTareas() {
    const lista = document.querySelector("#listaTareas");
    lista.innerHTML = "";

    tareas.forEach(function (tarea, i) {
        const li = document.createElement("li");
        li.innerHTML = `${tarea} <button onclick="eliminarTarea(${i})">O</button>`;
        lista.appendChild(li);
    });
}

// 4. Añadir nueva tarea
function agregarTarea() {
    const input = document.getElementById("nuevaTarea");
    const texto = input.value.trim();

    if (texto) {
        tareas.push(texto);
        localStorage.setItem("tareas", JSON.stringify(tareas));
        input.value = "";
        mostrarTareas();
    }
}

// 5. Eliminar tarea
function eliminarTarea(index) {
    tareas.splice(index, 1);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    mostrarTareas();
}
cargarTareas();