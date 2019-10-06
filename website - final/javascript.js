function response() {
    var x = document.getElementById("resTopnav");
    if (x.className === "topnav sticky") {
        x.className += " responsive";
    } 
	else if(x.className === "topnav"){
		 x.className += " responsive";
	}
	else if(x.className === "topnav responsive"){
		 x.className = "topnav";
	}
	else {
        x.className = "topnav sticky";
    }
}


var topnav = document.getElementById("resTopnav");

var sticky = topnav.offsetTop;

window.onscroll = function() 
	{
		myFunction()
	};
function myFunction() {
  if (window.pageYOffset >= sticky) {
    topnav.classList.add("sticky")
  } 
  else {
    topnav.classList.remove("sticky");
  }
}


function myMap() 
{
    var mapOptions = 
	{
		center: new google.maps.LatLng(53.3085,-6.2235),
		zoom: 17,
	};
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}



var myIndex = 0;
slideshow();

function slideshow() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(slideshow, 4500);    
}