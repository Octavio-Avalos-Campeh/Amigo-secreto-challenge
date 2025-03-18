// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del campo de texto y eliminar espacios extras
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar que se ingrese un nombre
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Actualizar la visualización de la lista de amigos
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para actualizar la lista visible de nombres
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    // Limpia la lista actual
    lista.innerHTML = "";

    // Recorrer el array con un bucle 'for'
    for (const i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto de manera aleatoria
function sortearAmigo() {
    // Verificar que la lista no esté vacía
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Por favor, agrega al menos un amigo.");
        return;
    }

    // Generar un índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indice];

    // Mostrar el resultado del sorteo
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar cualquier resultado anterior

    const li = document.createElement("li");
    li.textContent = "Amigo Secreto: " + amigoSeleccionado;
    resultado.appendChild(li);
}