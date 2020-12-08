var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn  = document.querySelector(".random");
// page load
body.style.background = "linear-gradient(to right, "+ color1.value + ", "+ color2.value + ")";

// displaying the intial css linear gradient property on page load
css.textContent = body.style.background ; 
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


function generateRandomColor()
{
	//getting a random number
	const randomColor1= Math.floor(Math.random()*16777215).toString(16);
	const randomColor2= Math.floor(Math.random()*16777215).toString(16);
	// referencing the color1 and color2 element values with random numbers 
	color1.value = "#" + randomColor1;
	color2.value = "#" + randomColor2;
	//setting the color values generated to the backgound 
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", generateRandomColor);