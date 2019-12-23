<?php
/*
This php file is called by the JavaScript functions myFunction1(), myFunction2(), myFunction4() in the Unit7Sample3.js file. It will retrieve the content of Unit7_RegisteredUsers.txt which is in the parent folder of
this PHP file folder.
*/
echo file_get_contents("../Unit7_RegisteredUsers.txt");

?> 

