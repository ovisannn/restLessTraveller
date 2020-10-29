$("document").ready(function(){
    $(".navbar__ham").on("click", function(){
      $(".navbar__links").toggleClass("active");  
    });
  
    $(".navbar__links a li").on("click", function(){
      $(".navbar__links").removeClass("active");
    });
  });
  
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
  
  
    