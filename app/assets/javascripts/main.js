var ready = function () {
  $('.portfolioLink, .experienceLink, .contactLink').on('click', function(e){
    var target;
    e.preventDefault();
    switch($(this).attr("class")) {
      case 'portfolioLink':
        target = $('#portfolio');
        break;
      case 'experienceLink':
        target = $('#experience');
        break;
      case 'contactLink':
        target = $('#contact');
        break;
    }

    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 1000);
  });

  $(".piece").click(function() {
    if(!$(this).hasClass('activePiece')) {
      var piece = $(this) 
      piece.addClass('activePiece')
      $(".close", piece).show()
      
       setTimeout(function(){
        $(".pieceImages", piece).fadeIn("slow")
        $(".pieceLinks", piece).fadeIn("slow")
        $(".pieceLists", piece).fadeIn("slow")
      },200)
      $(".piece").not(this).hide()
    }
  })
  $(".close").click(function(evt) {
    evt.stopPropagation();
    $(this).hide()
    $(this).parent().removeClass('activePiece')
    $(this).parent().css("top",0).css("left",0)
    $(".pieceImages", $(this).parent()).hide()
    $(".pieceLinks", $(this).parent()).hide()
    $(".pieceLists", $(this).parent()).hide()
    setTimeout(function(){$(".piece").fadeIn()},300)
  })
  
}

$(document).ready(ready);
$(document).on('page:load', ready);

