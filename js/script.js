//@codekit-prepend "libs/jquery-1.7.1.min.js", "libs/ss-standard.js", "libs/jquery.tiptip.js";

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
		  $('#main-stream').append('<div class="stream-item"><div class="threecol track-image"><img class="album-art" src="' + feedObject.result[i].images['128x128'].url + '"></div> <!-- /fourcol /track-info --><div class="ninecol last track-info"><h3 class="track">' + feedObject.result[i].metadata.title + '</h3><h3 class="artist">' + feedObject.result[i].metadata.artist.name + '</h3><div class="eightcol description">' + feedObject.result[i].post.description + '</div> <!-- /fourcol /track-info --><div class="fourcol last"><ul class="track-actions ss-icon"><li><a href="#" id="action-thumbs-up" class="track-action-item" title="Like This Track">thumbsup</a></li><li><a href="#" id="action-thumbs-down" class="track-action-item" title="Dislike This Track">thumbsdown</a></li><li><a href="#" class="track-action-item" title="Flag This As Interesting">flag</a></li><li><a href="#" class="track-action-item" title="Share This Track">send</a></li><li><a href="#" class="track-action-item" title="View Artist Profile">users</a></li></ul></div> <!-- /fourcol /track-info --></div> <!-- /ninecol track-info --></div><!-- /stream-item -->');
		  $('.stream-item').data('album-art-background', feedObject.result[i].images['640x400'].url);
		  console.log( $('.stream-item').data('album-art-background') );
		}
		
		// Loop through the next 20 for the condensed track list
		// for (i = 20;i<40; i++){
		// 	$('#main-stream').append('<div class="stream-item condensed"><div class="twelvecol track-info"><h3 class="artist">' + feedObject.result[i].metadata.artist.name + '</h3><h3 class="track">' + feedObject.result[i].metadata.title + '</h3></div> <!-- /twelvecol track-info --></div> <!-- /twelvecol /stream-item -->');
		// }	
		
		$('body').addClass('active');
		
		// Tooltip
		$(function(){
			$(".track-action-item").tipTip({
				delay: 250
			})
		});
	}
});

var streamItem;
var albumArt;


// Shrink page header after load
$('#page-header h1').delay('12000').addClass('loaded');


// Now Playing & Background Album Art
$('#main-stream').on('click', '.stream-item', function(){
		var artist = $(this).find('.artist').text();
		var track = $(this).find('.track').text();
		var nowPlaying = artist + track;
		
		$('#now-playing-title').text( nowPlaying );
		
		$('#pro-tip').fadeOut(800);
		
		if (!$('#player').hasClass('active')){
			$('#player').addClass('active');
		}
		
		if ($('#now-playing').hasClass('hidden')){
			$('#now-playing').removeClass('hidden');
		}
		
		// albumArt = $('this').data('album-art-background');
		// if ($('body').hasClass('active')){
		// 	$('body').addClass('tracked').css('background-image','url("' + albumArt + '")');
		// }
});


// Set ACTIONS to active/inactive on Click
$('#main-stream').on('click', '.track-action-item', function(e){
	e.preventDefault();
	e.stopPropagation();
	$(this).toggleClass('active');
	
	if ($(this).prop('id','action-thumbs-down')){
		if ($('#action-thumbs-up').hasClass('active')){
			$('#action-thumbs-up').removeClass('active');
		}
	}
	if ($(this).prop('id','action-thumbs-up')){
		if ($('#action-thumbs-down').hasClass('active')){
			$('#action-thumbs-down').removeClass('active');
		}
	}
});


// Player Opacity Controls
 $(function() {
    $(window).scroll(function(){
		var scrollPosition = $(window).scrollTop();
		if(scrollPosition >= 20){
			$('#player').addClass('fixed');
			$('#page-header h1').addClass('loaded');
		}
		if(scrollPosition < 20){
			$('#player').removeClass('fixed');
			$('#page-header h1').removeClass('loaded');
		}
		if(scrollPosition < 120){
			$('#sidebar').addClass('fixed');
		}
		if(scrollPosition < 120){
			$('#sidebar').removeClass('fixed');
		}
	});
});