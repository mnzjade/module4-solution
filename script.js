
(function () {
var names = ["Kathryn", "John", "Jade", "Summer", "Pablo", "Tala", "Snow", "Justin", "Jam"];
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0);
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i])  ;
  } 
   if (firstLetter === 'J') {
    byeSpeaker.speak(names[i])  ;
  } 
  else {
    helloSpeaker.speak(names[i]) ;
  }
}
 
})();