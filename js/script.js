/*
 * scripts.js
 *
 * auto-concatenated jquery, modernizr and custom alternate files
 *
 */

//@codekit-prepend "libs/jquery-1.7.1.min.js", "libs/ss-standard.js";

$.ajax({
	"type": "GET",
	"url": 'http://boomingsystem.com/api/v1/feed/',
	"cache": false,
	"dataType": "text",
	"complete": function(r) {
		console.log(JSON.parse(r.responseText));
		
		$('#loader').fadeOut(800);
			
		// loop through the first 12
		var i = 0;
		var feedObject = JSON.parse(r.responseText);
		for (i; i<12; i++) {
		  $('#main-stream').append('<div class="stream-item"><div class="twelvecol track-info"><h3 class="track">' + feedObject.result[i].metadata.title + '</h3><h3 class="artist">' + feedObject.result[i].metadata.artist.name + '</h3></div> <!-- /twelvecol track-info --><div class="fourcol track-image"><img class="album-art" src="' + feedObject.result[i].images['128x128'].url + '" alt="' + feedObject.result[i].post.title + '"></div> <!-- /fourcol /track-info --></div> <!-- /twelvecol /stream-item -->');
		}
		for (i = 20;i<40; i++){
			$('#main-stream').append('<div class="stream-item condensed"><div class="twelvecol track-info"><h3 class="track">' + feedObject.result[i].metadata.title + '</h3><h3 class="artist">' + feedObject.result[i].metadata.artist.name + '</h3></div> <!-- /twelvecol track-info --></div> <!-- /twelvecol /stream-item -->');
		}
	}
});

// var title = results.response.oneforty;
  //       var numTweets = results.response.trackback_total;
  //       $('#results').append(title + ' has ' + numTweets + ' tweets.');



// var trackInfo = $('.track-info');

// trackInfo.click(function(){
// 	$('body').css('background-color','red');
// });



// Player Opacity Controls
 $(function() {
    $(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop >= 20){
			$('#player').addClass('fixed');
		}
		if(scrollTop < 20){
			$('#player').removeClass('fixed');
		}
	});
		
	// $('#player').hover(
	// 	function (e) {
	// 		var scrollTop = $(window).scrollTop();
	// 		if(scrollTop != 0){
	// 			$('#player').stop().animate({'opacity':'1'},400);
	// 			$('#player').stop().animate({'opacity':'1'},400);
	// 		}
	// 	},
	// 	function (e) {
	// 		var scrollTop = $(window).scrollTop();
	// 		if(scrollTop != 0){
	// 			$('#player').stop().animate({'opacity':'0.5'},400);
	// 		}
	// 	}
	// );
});