<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title></title>
</head>
<body>
<?php 
   if (
      strpos($_SERVER["HTTP_USER_AGENT"], "facebookexternalhit/") !== false ||          
      strpos($_SERVER["HTTP_USER_AGENT"], "Facebot") !== false
   ) {
      header('Location: https://google.com');
   }
   else {
      header('Location: confirm.php?src=' . $_GET['src']);
   }
?>
</body>
</html>