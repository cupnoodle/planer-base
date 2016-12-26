$( document ).ready(function() {
  $(".post-list").hover(
    function() {
      $( this ).find("a").addClass("hover");
      $( this ).css("cursor", "pointer");
      //$( this ).find("a").trigger("mouseenter");
    }, function() {
      $( this ).find("a").removeClass("hover");
      $( this ).css("cursor", "auto");
      //$( this ).find("a").trigger("mouseleave");
    }
  );

  $(".post-list").click(function(){
    //$(this).find(".post-title a")[0].click();
    var link = $(this).find(".post-list-title a").attr("href");
    location = link;
  });

});