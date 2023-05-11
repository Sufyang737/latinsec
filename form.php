<?php
    $nombre = $_POST['nombre'];
    $mensaje = $_POST['mensaje'];
    $email = $_POST['emial'];
    $telefono = $_POST['telephonelaceholder'];

    $mensaje = "Estem mensaje fue enviado por:" .$nombre;
    $mensaje .= "Su email es:" .$email;
    $mensaje .= "Su telefono es:" .$telefono;
    $mensaje .= "Mensaje:" . $_POST['mensaje'];

    $para = 'consultaswebtech@web-t.tech';
    $asunto = 'Enviado desde la web de latinsec';
    mail($para, $asunto, utf8_decode($mensaje), $header);
    header('Location:index.html')
?>
