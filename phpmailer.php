<?php
if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: form.html" );
}

require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['subject'];
$mensaje = $_POST['mensaje'];
$numero = $_POST['telephone'];




$body = <<<HTML
    <h1>Contacto desde la web</h1>
    <p>De: $nombre  / $email / telefono: $numero</p>
    <h2>Mensaje</h2>
    $mensaje
HTML;

$mailer = new PHPMailer();
$mailer->setFrom( $email, $nombre, $numero );
$mailer->addAddress('consultaswebtech@web-t.tech','Sitio web');
$mailer->Subject = "Mensaje web: $asunto";
$mailer->msgHTML($body);
$mailer->AltBody = strip_tags($body);
$mailer->CharSet = 'UTF-8';

$rta = $mailer->send( );

header("Location: gracias.html" );