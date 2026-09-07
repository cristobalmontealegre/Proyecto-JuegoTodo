function iniciarSesion(event) {
    event.preventDefault();

    const identificador = document.getElementById('login-usuario').value.trim();
    const password = document.getElementById('login-password').value;

    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioValido = usuariosGuardados.find(u => 
        (u.email === identificador || u.usuario === identificador) && u.password === password
    );

    if (usuarioValido) {
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioValido));
        alert(`¡Bienvenido de nuevo, ${usuarioValido.usuario}!`);
        window.location.href = "index.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}