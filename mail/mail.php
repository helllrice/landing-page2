<?php

$recepient = "wizardcatt@gmail.com";
$siteName = "landing-page";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$phone = trim($_POST["comment"]);
$message = "Имя: $name \nТелефон: $phone \nКомментарий: $comment" ;

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>