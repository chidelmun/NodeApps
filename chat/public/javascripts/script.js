window.onload = function(){
	var video = document.querySelector("#videoElement");
 
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
 
	if (navigator.getUserMedia) {       
	    navigator.getUserMedia({video: true}, handleVideo, videoError);
	}
	 
	function handleVideo(stream) {
	    video.src = window.URL.createObjectURL(stream);
	}
	 
	function videoError(e) {
	    // do something
	}
}

function btn(){
	if (document.getElementById("btn-blue").innerHTML == "Play") {
		document.getElementById("btn-blue").innerHTML = "Pause";
		alert("Sorry!! Can't perform Action");
	}else{
		document.getElementById("btn-blue").innerHTML = "Play";
		alert("Sorry!! Can't perform Action");
	}
}