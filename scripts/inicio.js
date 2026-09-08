document.addEventListener('DOMContentLoaded', function() {
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
    const contenedorUsuario = document.querySelector('.usuario');

    if (usuarioLogueado && contenedorUsuario) {
        contenedorUsuario.innerHTML = `
            <span class="nombre-usuario">Hola, <strong>${usuarioLogueado.usuario}</strong></span>
            <a href="#" class="btn-sesion" onclick="cerrarSesion(event)">CERRAR SESION</a>
        `;
    }
});

function cerrarSesion(event) {
    if (event) event.preventDefault(); // Evita que la página salte arriba
    localStorage.removeItem('usuarioLogueado'); // Elimina la sesión activa
    window.location.reload(); // Recarga la página para mostrar los botones de login/registro
}