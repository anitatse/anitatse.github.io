// taken from https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function mobileNavBar(color) {
  var items = document.getElementById("navitems");
  var nameItem = document.getElementById("leftnav");
  var bar = document.getElementById("topnav");

  if (items.style.display === "block") {
    items.style.display = "none";
    nameItem.style.display = "none";
    nameItem.style.float = "left"
    bar.style.height = "65px";
    bar.style.backgroundColor = "transparent";
  } else {
    items.style.display = "block";
    items.style.opacity = "1";
    nameItem.style.display = "block";
    nameItem.style.float = "none"
    bar.style.height = "180px";
    bar.style.backgroundColor = color;
  }
}
  
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // scrolls up 
    document.getElementById("navitems").style.opacity = "1";
  } else {
    // scrolls down
    document.getElementById("navitems").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
}
