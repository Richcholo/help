document.getElementById("button").addEventListener("click", function() {
  // Change background to dancing rick
    document.body.style.backgroundImage = "url('rickroll.gif')"
  // Hide the heading and the button
  document.querySelector(".troll").style.display = "none"

  // Play song
  var song = document.getElementById("song")
  song.play()
})