<?php
// Check for empty fields

if(empty($_POST['first_name'])||
   empty($_POST['tel'])){
   echo "No arguments Provided!";
   return false;
   }
   
$first_name = strip_tags(htmlspecialchars($_POST['first_name']));
$tel = strip_tags(htmlspecialchars($_POST['tel']));
// Create the email and send the message
$to = 'sservice77@yandex.ru'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Обратная форма Smart-Service:  $name";
$email_body = "Новая заявка .\n\n"."Имя: $first_name\n\nНомер телефона: $tel";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>