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
    
}

// 4. Añadir nueva tarea

// 5. Eliminar tarea