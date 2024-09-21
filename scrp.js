document.getElementById('mostrarMensaje').onclick = function() {
    const menDiv = document.getElementById('men');
    menDiv.style.display = 'block'; // Muestra el mensaje

    // Ocultar el botón de mostrar mensaje
    this.style.display = 'none';

    // Lógica para las respuestas
    document.getElementById('respuesta1').onclick = function() {
        alert("VALEEEE");
        mensajeDiv.style.display = 'none'; // Oculta el mensaje
        document.getElementById('mostrarMensaje').style.display = 'block'; // Muestra el botón de nuevo
    };

    document.getElementById('respuesta2').onclick = function() {
        alert("igual tqm.");
        menDiv.style.display = 'none'; // Oculta el mensaje
        document.getElementById('mostrarMensaje').style.display = 'block'; // Muestra el botón de nuevo
    };
};
