// Array Vacío para guardar los objetos.
let solicitudes = [];

// Función para enviar el formulario.
function enviarForm(event) {
    event.preventDefault(); // Prevent default evita que se recarge la página.

    // Obtener el valor de los campos.
    const nombre = document.getElementById("nombre").value;
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;
    const personas = document.getElementById("personas").value;
    const fecha = document.getElementById("fecha").value;

    // Creación del objeto.
    const solicitud = {
        nombre, origen, destino, personas, fecha,
    };
   
    // Push al objeto con los datos.
    solicitudes.push(solicitud)

    // Confirmación
    console.log("Enviado");

    // Reset del formulario
    document.querySelector("form").reset();

    // Vista del objeto
    for (let i = 0; i < solicitudes.length; i++) {
        // console.log(solicitudes[i]);  
    }
};

// Funcion para filtrar los objetos.
function filtrarSol() {
    const destinosPermitidos = ["canarias", "mallorca", "galicia"];
    let datosFiltrados = "";

    for (let i = 0; i < solicitudes.length; i++) {
        let destino = solicitudes[i].destino.toLowerCase();
        if (destinosPermitidos.includes(destino)) {
            console.log(solicitudes[i]);
            datosFiltrados += `Nombre: ${solicitudes[i].nombre}, Origen: ${solicitudes[i].origen} Destino: ${solicitudes[i].destino} Personas: ${solicitudes[i].personas} Fecha: ${solicitudes[i].fecha}<br>`;
        }
    }
    document.getElementById("datosFiltrados").innerHTML = datosFiltrados;
}
