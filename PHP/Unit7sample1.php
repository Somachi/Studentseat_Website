<?php
/*
This php file is called by the JavaScript functions myFunction() and myFunction3() in the Unit7Sample1.js file. It will receive the data content in variable and store it in the php variable str and then write it to a text file Unit7_RegisteredUsers.txt on the server by opening the text file Unit7_RegisteredUsers.txt which is in the parent folder of this PHP file folder. It will then write the content of str variable to that file and close the file. If there was any other content in the file, it will overwrite it.
*/
$str = $_POST['variable'];
$file = fopen("../Unit7_RegisteredUsers.txt","w");
fwrite($file,$str);
fclose($file);
?> 