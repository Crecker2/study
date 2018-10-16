$(document).ready(function(){
  $('.articlebody h1').filter('[id]').each(function(a,b){
      $(b).append(' <a href=#'+$(b).attr("id")+'>#</a>');
  });

  $('.articlebody h2').filter('[id]').each(function(a,b){
      $(b).append(' <a href=#'+$(b).attr("id")+'>#</a>');
  });
});
