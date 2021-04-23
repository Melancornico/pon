<?php
 $destinatario = 'brianjoshuadiaz@gmail.com';
 $nombre = $_POST['nombre'];
 $email = $_POST['email'];
 $mensaje = $_POST['mensaje'];

 $header = "Enviado desde la página pon.com.mx";
 $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

 mail($destinatario, $nombre, $email, $mensaje,
$header);
echo "<scrip>alert('Correo enviado exitosamente')</scrip>";
echo "<scrip>setTimeout(\"location.href= 'index.html'\",100)</scrip>";
?>
