<?php 

if(isset($_POST['SEND']))
{
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$email = $_POST['email'];
	$text = $_POST['text'];

	$mailTo = "kirbymarquez15@gmail.com";
	$headers = "From: ".$email;
	$txt = "You have received an email from ".$lastname."\n\n".$text;

	mail($mailTo, $message, $txt, $headers);
	header("Location: website.html?mailsend");
}
