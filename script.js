// Espera a que el formulario se envíe
document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Evita que el formulario se envíe automáticamente
    event.preventDefault();
    
    // Obtiene el valor del campo de código de estudiante
    var codigo = document.getElementById("codigo").value;
    // Obtiene el valor del campo de contraseña
    var clave = document.getElementById("clave").value;

    // Crea un objeto con los datos del usuario a enviar al servidor
    var data = {
        codigo: codigo,
        clave: clave
    };

    // Realiza una solicitud POST al servidor con los datos del usuario
    fetch("https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" // Indica que los datos se envían en formato JSON
        },
        body: JSON.stringify(data) // Convierte el objeto de datos a formato JSON antes de enviarlo
    })
    // Cuando se recibe una respuesta del servidor, la convierte en JSON
    .then(response => response.json())
    // Maneja la respuesta del servidor
    .then(user => {
        // Guarda el objeto de usuario devuelto en el localStorage del navegador
        localStorage.setItem("usuario", JSON.stringify(user));
        // Muestra un mensaje de éxito
        alert("Login exitoso. Usuario guardado en localStorage.");
    })
    // Maneja errores en la solicitud
    .catch(error => {
        console.error("Error:", error);
        // Muestra un mensaje de error
        alert("Error en el login. Por favor, inténtalo de nuevo.");
    });
});