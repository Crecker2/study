function showhidecontent(e){
  if(!$(".articlebody .show-hide-button button").data("toggle")){
    $(".articlebody p, .articlebody li").css("filter", "blur(5px)");
    $(".articlebody p, .articlebody li").data("toggle", true);
    $(".articlebody p, .articlebody li").addClass("noselect");
    $(".articlebody .show-hide-button button").data("toggle", true);
    $(".articlebody .show-hide-button button").text("show all content");

  } else {
    $(".articlebody p, .articlebody li").css("filter", "none");
    $(".articlebody p, .articlebody li").data("toggle", false);
    $(".articlebody p, .articlebody li").removeClass("noselect");
    $(".articlebody .show-hide-button button").data("toggle", false);
    $(".articlebody .show-hide-button button").text("hide all content");
  }
}

$(document).ready(function(){
  $('.articlebody h1').filter('[id]').each(function(a,b){
      $(b).append(' <a href=#'+$(b).attr("id")+'>#</a>');
  });

  $('.articlebody h2').filter('[id]').each(function(a,b){
      $(b).append(' <a href=#'+$(b).attr("id")+'>#</a>');
  });

  $(".articlebody p, .articlebody li").click(function(e){
    e.stopPropagation();
  	if(!$(this).data('toggle')){
  		$(this).css("filter","blur(5px)");
      $(this).addClass("noselect");
  		$(this).data('toggle',true);
  	} else {
  		$(this).css("filter","none");
      $(this).removeClass("noselect");
  		$(this).data('toggle',false);
  	}
  });
});
