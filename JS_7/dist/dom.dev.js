"use strict";

var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];

function getMusicPlaylist() {
  var playlist = document.getElementById('playlist');
  htmlToInsert = '<ol>';

  for (var i = 0; i < playList.length; i++) {
    htmlToInsert += "<li><div>author: ".concat(playList[i].author, "</li><li class=song>song: ").concat(playList[i].song, "</div></li>");
    htmlToInsert += '</ol>';
    playlist.innerHTML = htmlToInsert;
  }
}