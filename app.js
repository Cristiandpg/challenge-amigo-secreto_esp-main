let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nombre => {
        const item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para sortear.");
        return;
    }
    
    let amigosDisponibles = [...amigos];
    let asignaciones = {};
    
    amigos.forEach(amigo => {
        let posibles = amigosDisponibles.filter(a => a !== amigo);
        
        if (posibles.length === 0) {
            return sortearAmigo();
        }
        
        let indiceAleatorio = Math.floor(Math.random() * posibles.length);
        asignaciones[amigo] = posibles[indiceAleatorio];
        amigosDisponibles = amigosDisponibles.filter(a => a !== posibles[indiceAleatorio]);
    });

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    for (let [amigo, asignado] of Object.entries(asignaciones)) {
        resultadoLista.innerHTML += `<li>${amigo} → 🎁 ${asignado}</li>`;
    }
}
