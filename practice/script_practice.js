function clickCube() {
    var red = getRandomArbitrary(0, 255);
    var green = getRandomArbitrary(0, 255);
    var blue = getRandomArbitrary(0, 255);

    var redFirst = getRandomArbitrary(0, 255);
    var greenFirst = getRandomArbitrary(0, 255);
    var blueFirst = getRandomArbitrary(0, 255);

    var redSecond = getRandomArbitrary(0, 255);
    var greenSecond = getRandomArbitrary(0, 255);
    var blueSecond = getRandomArbitrary(0, 255);

    var stringBoxShadow = "0 0 5px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 25px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 50px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 100px rgba(" + red + ", " + green + ", " + blue + ", 1)," +
    "0 0 200px rgba(" + red + ", " + green + ", " + blue + ", 0.5)," +
    "0 0 300px rgba(" + red + ", " + green + ", " + blue + ", 0.5)";

    var borderColor = "rgb(" + redFirst + ", " + greenFirst + ", " + blueFirst + ")";

    var borderRadiusFirst =  getRandomArbitrary(2, 100);

    var heightFirst = getRandomArbitrary(100, 300);

    var widthFirst = getRandomArbitrary(100, 300);

    var borderFirst = getRandomArbitrary(3, 20);

    
    document.getElementById("cube") .style.backgroundColor = "rgb(" + redSecond + ", " + greenSecond + ", " + blueSecond + ")";
    document.getElementById("cube") .style.boxShadow = stringBoxShadow;
    document.getElementById("cube") .style.borderRadius = borderRadiusFirst + "px";
    document.getElementById("cube") .style.height = heightFirst + "px";
    document.getElementById("cube") .style.width = widthFirst + "px";
    document.getElementById("cube") .style.border = borderFirst + "px solid " + borderColor;

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }