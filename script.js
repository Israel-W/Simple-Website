document.getElementById('colorButton').addEventListener('click', function() {
  // Generate a random color
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  // Apply the random color to the background
  document.body.style.backgroundColor = randomColor;
});
