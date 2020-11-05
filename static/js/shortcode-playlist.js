function playAudio(player,link){
  // load file and start playing
  var x = document.getElementById(player);
  x.src = link;
  x.load();
  x.play();

  // set active-class for current entry
  var elem = document.getElementsByClassName('active')
  for( var i=0; i<elem.length; i++ ) {
    elem[i].className = 'audio-playlist-entry';
  }
  document.activeElement.parentNode.className += " active";
}