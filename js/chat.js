twemoji.parse(document.body);
function onButtonClick(emoji) {
    var bla = $('#hidden_unicode').val();
    $( "#hidden_unicode" ).val(bla+""+emoji );
    $( "#editor" ).text(bla+""+emoji );
    twemoji.parse(document.body);
    update_output();
}

$('#editor').bind('blur keyup paste copy cut mouseup', function(e) {
  update_output();
})

function update_output() {
  $('#hidden_input').val($('#editor').html());
}
function undo_msg(){
            var inputString = $('#hidden_unicode').val();
            var shortenedString = inputString.substr(0,(inputString.length -1));
            $('#hidden_unicode').val(shortenedString);
            $('#editor').html($('#hidden_unicode').val());
            twemoji.parse(document.body);
            update_output();
}
$( ".cat1btn" ).click(function() {
  $( "cat" ).fadeOut( "slow" ).promise().done(function() {
    $( "#cat1" ).fadeIn( "slow" );
  });
  
});
$( ".cat2btn" ).click(function() {
  $( "cat" ).fadeOut( "slow" ).promise().done(function() {
  $( "#cat2" ).fadeIn( "slow" );
  });
});
$( ".cat3btn" ).click(function() {
  $( "cat" ).fadeOut( "slow" ).promise().done(function() {
  $( "#cat3" ).fadeIn( "slow" );
  });
});
$( ".senden" ).click(function() {
$.ajax({
 	 method: "POST",
  dataType: 'jsonp',
 	 url: "http://kevinsieger.de/paintit/demos/classic_with_gui/send.php",
	  data: {  }
	})
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });
});