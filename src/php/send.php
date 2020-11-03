<?php
$_POST = json_decode(file_get_contents("php://input"), true);

$name = $_POST["name"];
$phone = $_POST["phone"];
$mail = $_POST["email"];
$comment = $_POST["comment"];

$to = "a.bakhtalovskyi@dforce.com";

$subject = "Заявка із сайту";
$message = "
Ви отримали лист від нового клієнта. Зв’яжіться з ним! <br>
Ім’я: ".htmlspecialchars($name)."<br>
Телефон: ".htmlspecialchars($phone)."<br>
Email: ".htmlspecialchars($mail)."<br>
Коментар:".htmlspecialchars($comment);


$headers = "From: $mail\r\nContent-type: text/html; charset=utf-8\r\n";
mail($to, $subject, $message, $headers);

var_dump($_POST);
var_dump($_REQUEST);


file_get_contents('php://input');

exit
?>