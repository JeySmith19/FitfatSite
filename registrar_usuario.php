<?php
require_once("conexion.php");

// Verifica si se envió el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtiene los valores del formulario
    $nombre = $_POST["nombre"];
    $apellidos = $_POST["apellidos"];
    $usuario = $_POST["usuario"];
    $correo = $_POST["correo"];
    $contrasena = $_POST["contrasena"];
    $contrasena2 = $_POST["contrasena2"];
    $celular = $_POST["celular"];
    $direccion = $_POST["direccion"];

    // Consulta SQL para insertar un nuevo usuario en la tabla "usuarios"
    $consulta = "INSERT INTO usuarios (nombre, apellidos, usuario, correo, contrasena, contrasena2, celular, direccion) VALUES ('$nombre', '$apellidos', '$usuario', '$correo', '$contrasena', '$contrasena2', '$celular', '$direccion')";

    if ($conn->query($consulta) === TRUE) {
        // Registro exitoso, redirige al usuario a la página de inicio de sesión
        header("Location: ingresa.html");
    } else {
        // Error en el registro, muestra un mensaje de error o redirige de nuevo al formulario de registro
        echo "Error al registrar el usuario: " . $conn->error;
    }
}

// Cierra la conexión a la base de datos
$conn->close();
?>
