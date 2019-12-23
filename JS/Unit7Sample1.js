
/*
The myFunction() function below is invoked in the Unit7sample1.html file.
It will extract the field name the user didnt fill before clicking the submit button. The name of the field will be passed to
a php file for it to be stored in a text file and then be displayed in the Unit6sample4.html webpage to let the user know it has 
to be filled. However if the user completely fills the form then the name field value will be passed to a php file for it to
be saved and then be displayed on the successful account registeration page.
The setRequestHeader is very neccessary for the data (the variable) to be sent to the php file.
It must have to appear immediately after the xhttp.open() function and before the xhttp.send() for it
to work.
The last line of the code which is window.location.assign() function will load the Unit5sample3.html if all 
fields were filled completely or Unit7sample4.html if any field wasnt filled.

Also, the other JavaScript function myFunction3() works in the same way but the difference it that when the user completely fills all
fields, the value entered in the name field will be displayed in the user's name field on the next page which the user's profile
page.

Code Reference:
Site - https://www.developphp.com/video/JavaScript/Ajax-Post-to-PHP-File-XMLHttpRequest-Object-Return-Data-Tutorial
Owner- Developphp
Date Accessed - 28/12/2018

*/

function myFunction() {
  var name = document.getElementById("fname").value;
  var uage = document.getElementById("userage").value;
  var pswd  = document.getElementById("pword").value;
  var culg = document.getElementById("cgroup").value;
  var ugender = document.getElementById("usergender").value;
  var uint = document.getElementById("userinterest").value;
  

  if (name == ""){
    var xhttp = new XMLHttpRequest();
    name = "Name";
    var vars = "variable="+name;
    xhttp.open("POST", "PHP/Unit7sample1.php", true);//pass the string to a php script to //write it to a server
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {                                
      if (this.readyState == 4 && this.status == 200) {}};
   
    xhttp.send(vars);
    window.location.assign("Unit7sample4.html");//load the unsuucessful account //registration page
    //or window.location.replace("Unit7sample4.html");
  }
  else if (uage == ""){
    var xhttp = new XMLHttpRequest();
    uage = "Age";
    var vars = "variable="+uage;
    xhttp.open("POST", "PHP/Unit7sample1.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {                                
      if (this.readyState == 4 && this.status == 200) {}};
   
    xhttp.send(vars);
    window.location.assign("Unit7sample4.html");
    //or window.location.replace("Unit7sample4.html");
  }

   else if (pswd == ""){
    var xhttp = new XMLHttpRequest();
    pswd = "Password";
    var vars = "variable="+pswd;
    xhttp.open("POST", "PHP/Unit7sample1.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {                                
      if (this.readyState == 4 && this.status == 200) {}};
   
    xhttp.send(vars);
    window.location.assign("Unit7sample4.html");
    //or window.location.replace("Unit7sample4.html");
  }
   
  else if (culg == ""){
    var xhttp = new XMLHttpRequest();
    culg = "Cultural Group";
    var vars = "variable="+culg;
    xhttp.open("POST", "PHP/Unit7sample1.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {                                
      if (this.readyState == 4 && this.status == 200) {}};
   
    xhttp.send(vars);
    window.location.assign("Unit7sample4.html");
    //or window.location.replace("Unit7sample4.html");
  }

  else if (uint == ""){
    var xhttp = new XMLHttpRequest();
    uint = "Interest";
    var vars = "variable="+uint;
    xhttp.open("POST", "PHP/Unit7sample1.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {                                
      if (this.readyState == 4 && this.status == 200) {}};
   
    xhttp.send(vars);
    window.location.assign("Unit7sample4.html");
    //or window.location.replace("Unit7sample4.html");
  }
   else if (ugender == ""){
    var xhttp = new XMLHttpRequest();
    ugender = "Gender";
    var vars = "variable="+ugender;
    xhttp.open("POST", "PHP/Unit7sample1.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {                                
      if (this.readyState == 4 && this.status == 200) {}};
   
    xhttp.send(vars);
    window.location.assign("Unit7sample4.html");
    //or window.location.replace("Unit7sample4.html");
  }
    else{
  var xhttp = new XMLHttpRequest();
  var vars = "variable="+name;
  xhttp.open("POST", "PHP/Unit7sample1.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onreadystatechange = function() {                                
    if (this.readyState == 4 && this.status == 200) {}};
 
  xhttp.send(vars);
  window.location.assign("Unit7sample3.html");
  //or window.location.replace("Unit7sample3.html");
 }
}


function myFunction3() {
  var username = document.getElementById("uname").value;
  var userpwd = document.getElementById("pwd").value;
  

  if (username == ""){
    var xhttp = new XMLHttpRequest();
    username = "Name";
    var vars = "variable="+username;
    xhttp.open("POST", "PHP/Unit7sample1.php", true);//pass the string to a php script to //write it to a server
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {                                
      if (this.readyState == 4 && this.status == 200) {}};
   
    xhttp.send(vars);
    window.location.assign("Unit7sample5.html");//load the unsuucessful account //registration page
    //or window.location.replace("Unit7sample5.html");
  }
  else if ( userpwd== ""){
    var xhttp = new XMLHttpRequest();
    userpwd = "Password";
    var vars = "variable="+userpwd;
    xhttp.open("POST", "PHP/Unit7sample1.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {                                
      if (this.readyState == 4 && this.status == 200) {}};
   
    xhttp.send(vars);
    window.location.assign("Unit7sample5.html");
    //or window.location.replace("Unit7sample5.html");
  }

  else{
  var xhttp = new XMLHttpRequest();
  var vars = "variable="+username;
  xhttp.open("POST", "PHP/Unit7sample1.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onreadystatechange = function() {                                
    if (this.readyState == 4 && this.status == 200) {}};
 
  xhttp.send(vars);
  window.location.assign("Unit7sample8.html");
  //or window.location.replace("Unit7sample8.html");
 }
}


/* The below function which is invoked on the Registration page in the Location field. Each time a user types a letter into
the Location field it prompt this function to execute. This function links to the google Map JavaScript API and Places API.
For any letter entered into the field it will list any matching locations around the world using google map

Code Reference:
Site - https://www.youtube.com/watch?v=Rpzp0yCAmq4
Owner (Youtube Channel)- I Love Javascript
Date Accessed - 31/12/2018

API Reference:
Site (Places API) - https://developers.google.com/places/web-service/intro?hl=en_US
Site (Maps JavaScript API) - https://developers.google.com/maps/documentation/javascript/tutorial?hl=en_US
Owner- Google
Date Accessed - 31/12/2018
*/
function activatePlacesSearch(){
      var input = document.getElementById("rloc");
      var autocomplete = new google.maps.places.Autocomplete(input);

    }

