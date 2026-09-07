function registrarUsuario(event) {
    event.preventDefault();

    const usuario = document.getElementById('reg-usuario').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
        return;
    }

    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExiste = usuariosGuardados.some(u => u.email === email || u.usuario === usuario);

    if (usuarioExiste) {
        alert("El correo o nombre de usuario ya está registrado.");
        return;
    }

    const nuevoUsuario = { usuario, email, password };
    usuariosGuardados.push(nuevoUsuario);

    // Guardar usuarios y establecer la sesión activa
    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
    localStorage.setItem('usuarioLogueado', JSON.stringify(nuevoUsuario));

    alert(`¡Registro exitoso! Bienvenido ${usuario}.`);
    window.location.href = "index.html";
}