document.getElementById('loginForm').addEventListener('submit', function(e) {

    e.preventDefault();

    const user = document.getElementById('usuario').value;

    const pass = document.getElementById('password').value;

    if (user === "admin" && pass === "1234") {
        alert("¡Inicio de sesión satisfactorio!");
        window.location.href = "dashboard.html";
        localStorage.setItem("user", user);

    } else {
        alert("Usuario o contraseña incorrectos.");
        console.error("Login incorrecto");
    }
});