function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const colorCode = "#" + r.toString(16) + g.toString(16) + b.toString(16);

  return colorCode;
}
function generateRandomDarkColor() {
  const r = Math.floor(Math.random() * 128);
  const g = Math.floor(Math.random() * 128);
  const b = Math.floor(Math.random() * 128);

  const colorCodeс =
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  return colorCodeс;
}
function changeColor() {
  const colorBox = document.getElementById("colorBox");
  const newColor = generateRandomDarkColor();
  colorBox.style.backgroundColor = newColor;
}

setInterval(changeColor, 10000);
