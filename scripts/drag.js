//This script is part of Ninique's Dollmaker Script (http://minidollz.ninique.net)

$(document).ready(function() {
		
		//Makes the pieces draggable & sets options
		$("#piecesArea > div > img").draggable({ 
				//Makes it so that the pieces' z-index can be reordered
				stack: { group: '#piecesArea > div > img', min: 500,scroll: false },
				distance: 0		
		});
		
		//tabs
		$("#piecesArea").tabs();
	
	
	function baseSwitch(element){
	
	}
	
	//changes the body when thumbnails are clicked	
	$("#swatchesArea a").click( function() {
		var changeSrc = $(this).attr("href");
		$("#bodyArea>img").attr("src", changeSrc);
		return false;
	});
	
}); 
