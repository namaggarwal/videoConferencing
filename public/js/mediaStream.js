var mediaStream = (function(){
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	window.VideoContext = window.VideoContext || window.webkitVideoContext;
	//
	var attachEvents = function(){

	

	},

	onStream = function(localStream){
		
		$("#myVideo")[0].src = window.URL.createObjectURL(localStream);
	};


	var init = function(){
		
		var videoStream = navigator.getUserMedia({video:true},onStream);	
	};

	return {
		init : init
	}

})();

$(document).ready(function(){

	mediaStream.init();
});