$(document).ready(function(){
  $(window).scroll(function(){
    console.log("You are scrolling");
  });

  $(window).resizing(function(){
    console.log("You are resizing");
  });

  $(window).load(function(){           // work only before 3.0 version
    console.log("You are resizing");
  });

  $(window).unload(function(){           // work only before 3.0 version
    console.log("You are resizing");
  });
});