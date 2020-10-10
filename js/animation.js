$("document").ready(function(){
    $(".navbar__ham").on("click", function(){
      $(".navbar__links").toggleClass("active");  
    });
  
    $(".navbar__links a li").on("click", function(){
      $(".navbar__links").removeClass("active");
    });
  });
  
  
  
  
    