$(document).ready(function(){
  $('h1').filter('[id]').each(function(a,b){
      $(b).append(' <a href=#'+$(b).attr("id")+'>#</a>');
  });
});
