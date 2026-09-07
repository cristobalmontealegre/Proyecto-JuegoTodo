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
    if (event) event.preventDefault(); 
    localStorage.removeItem('usuarioLogueado');
    window.location.reload();
}