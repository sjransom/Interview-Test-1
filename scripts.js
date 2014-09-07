$(document).ready(function(){

  $('.chatBox').hide();
  $("#toChat").click(function() {
    $('.speechBubble p').replaceWith($('.speechStart'));
    $('.speechStart').css('display','block');
    $('.chatNow').hide();
    $('.chatBox').show();
  });

  $('#send').click(function() {
      update(); 
    }
  );

  var textFront = "<strong>Nicholas : </strong>";

  function update() {
    $('#Nicholas').html(textFront+$('.chatBox input').val()).css('background-color','#E0E0E0');
    setTimeout(function() {
    	$('<p><strong>Mary : </strong>To reset your...</p>').appendTo('#Mary');
    }, 3000);
  }

});