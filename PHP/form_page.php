<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from='thecyberbro@tutanota.com';

$email_subject = "Submission theCYBERbro";//this is the title of email
$email_body= "User Name: $name.\n".
             "User Email: $visitor_email \n". 
             "User Message: $message \n";

$to = "thecyberbro@tutanota.com";

$headers = "From: $email_from \r\n\";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html");
?>