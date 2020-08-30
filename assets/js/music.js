// $(function () {
//     var myAuto = document.getElementById('myaudio');
//     myAuto.play();
// })
function playPause() {
	   var music = document.getElementById('music');
	   var music_btn = document.getElementById('musicop');
	   if (music.paused){
	       music.play();
	       music_btn.src = 'assets/img/open.png';
	   }
	   else{
	       music.pause();
	       music_btn.src = 'assets/img/close.png'; 
	   }
	} 

	 function playPause1() {
	   var music1 = document.getElementById('music1');
	   var music1_btn = document.getElementById('musicop1');
	   if (music1.paused){
	       music1.play();
	       music1_btn.src = 'assets/img/open.png';
	   }
	   else{
	       music1.pause();
	       music1_btn.src = 'assets/img/close.png'; 
	   }
	}   

	 function playPause2() {
	   var music2 = document.getElementById('music2');
	   var music2_btn = document.getElementById('musicop2');
	   if (music2.paused){
	       music2.play();
	       music2_btn.src = 'assets/img/open.png';
	   }
	   else{
	       music2.pause();
	       music2_btn.src = 'assets/img/close.png'; 
	   }
	}     