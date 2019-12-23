/*
The myFunction1() function below is invoked in the Unit6sample3.html file.
It will call php file Unit7sample3.php in PHP folder. The response recieved in
the php file operation will be stored in the mesg variable and displayed in the 
congratulatory message that the new registered user sees.

The document.getElementById().innerHTML function inserts the string of texts assigned to it into the
SignUpMsg1 id in the Unit7sample3.html file

The myFunction2(), myFunction4() and myFunction5() functions are very similar to myFunction1() function

Code Reference:
Site - https://www.developphp.com/video/JavaScript/Ajax-Post-to-PHP-File-XMLHttpRequest-Object-Return-Data-Tutorial
Owner- Developphp
Date Accessed - 28/12/2018



*/


function myFunction1() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "PHP/Unit7sample3.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onreadystatechange = function() {                                
    if (this.readyState == 4 && this.status == 200) {
    	var mesg = this.responseText;
    	document.getElementById("SignUpMsg1").innerHTML = "Congratulations " + mesg +
    	" you have successfully joined Student Seat, please click login to continue to the site.";
    }
};
 
  xhttp.send();
  
 }

function myFunction2() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "PHP/Unit7sample3.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onreadystatechange = function() {                                
    if (this.readyState == 4 && this.status == 200) {
      var mesg = this.responseText;
      document.getElementById("SignUpMsg1").innerHTML = "Sorry you didn’t fill the " + mesg +" field of the registration form."+ 
      " Please try again or contact site administrator for assistance at bvnwanoruo@outlook.com";
    }
};
 
  xhttp.send();
  
 }

function myFunction4() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "PHP/Unit7sample3.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onreadystatechange = function() {                                
    if (this.readyState == 4 && this.status == 200) {
      var mesg = this.responseText;
      document.getElementById("SignUpMsg1").innerHTML = "Sorry you didn’t enter your " + mesg;
    }
};
 
  xhttp.send();
  
 }

 function myFunction5() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "PHP/Unit7sample3.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onreadystatechange = function() {                                
    if (this.readyState == 4 && this.status == 200) {
      var mesg = this.responseText;
      document.getElementById("ProfileUserName").innerHTML = mesg+ ":";
    }
};
 
  xhttp.send();
  
 }

/*
The myFunction6(), myFunction7() and myFunction8() functions below is invoked in the Unit7sample6.html file.
It is responsible for displaying the drop down fo each faq heading and also hiding it when the user clicks outside of the drop down.

Code Reference:
Site - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown
Owner- w3school (Refsnes Data)
Date Accessed - 28/12/2018

*/

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction6() {
  document.getElementById("myDropdown1").classList.toggle("show");

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn1')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}

function myFunction7() {
  document.getElementById("myDropdown2").classList.toggle("show");
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
      var dropdowns = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}

function myFunction8() {
  document.getElementById("myDropdown3").classList.toggle("show");
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn3')) {
      var dropdowns = document.getElementsByClassName("dropdown-content3");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}

/*
The myFunction9() functions below is invoked in the Unit7sample7.html file.
It is responsible for showing or hiding the account deletion message in Unit6sample7.html.

Code Reference:
Site - https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_toggle
Owner- w3school (Refsnes Data)
Date Accessed - 30/12/2018

*/

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction9() {
  $(document).ready(function(){
    $("button").click(function(){
      $("h2").toggle();
    });
  });
}

/* load Unit7sample2.html page */
function myFunction10() {
  window.location.assign("Unit7sample2.html");
}

/* load Unit7sample9.html page */
function myFunction12(){
 window.location.assign("Unit7sample9.html");
}

/* load Unit7sample8.html page */
function myFunction11(){
 window.location.assign("Unit7sample8.html");
}

/* load Unit7sample10.html page */
function myFunction13(){
 window.location.assign("Unit7sample10.html");
}