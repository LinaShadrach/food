$(function() {
  $("#section1 h2").click(function() {
    $("#section1 p").toggle();
  });

  $("#section2 h2").click(function() {
    $("#section2 p").toggle();
  });

  $("#section3 h2").click(function() {
    $("#section3 p").toggle();
  });

  $("#section1 p").click(function() {
    $("#section1 p").addClass("highlight");
  });
  $("#section2 p").click(function() {
    $("#section2 p").addClass("highlight");
  });
  $("#section3 p").click(function() {
    $("#section3 p").addClass("highlight");
  });
  
  $(".daybtn").click(function() {
    $("body").addClass("nightmode");
  });
  $(".nightbtn").click(function() {
    $("body").removeClass("nightmode");
  });
});
