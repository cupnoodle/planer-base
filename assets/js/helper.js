$( document ).ready(function() {
  $(".post").hover(
    function() {
      $( this ).find("a").addClass("hover");
      //$( this ).find("a").trigger("mouseenter");
    }, function() {
      $( this ).find("a").removeClass("hover");
      //$( this ).find("a").trigger("mouseleave");
    }
  );

  $(".post").click(function(){
    //$(this).find(".post-title a")[0].click();
    var link = $(this).find(".post-title a").attr("href");
    location = link;
  });

});