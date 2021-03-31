document.body.style.backgroundColor = "#000000";
document.body.style.backgroundRepeat = "no-repeat";
document.getElementById("buttontest").addEventListener("click", function() {
  // Change background to dancing rick
  document.body.style.backgroundImage = "url('rickroll.gif')"
  // Hide the heading and the button
  document.querySelector(".troll").style.display = "none"

  // Play song
  var song = document.getElementById("song")
  song.play()

  // Change background size
  document.body.style.backgroundSize = "100% 100%"
})
