
let theta =  0; 
let wave = [];

let slider;


function setup() 
{
	createCanvas(windowWidth,windowHeight - 70);
	slider = createSlider(1,80,1);
}

function draw()
{
	background(0);

	translate(200,200);

	let x = 0;
	let y = 0;
	
	for (let i = 0; i < slider.value(); i++) {

	let prevx = x; 
	let prevy = y;

	let n = i*2 + 1;
	let radius =100 * (4 / (n * PI));

	x += radius * cos(n * theta);
    y += radius * sin(n * theta);

	// This draws the circles
	noFill();
	stroke(255,100);
	ellipse(prevx,prevy,radius * 2);

	// This used to draw the centre of the circles 
	// fill(255);
	// ellipse(x,y,5);
	// stroke(255);

	stroke(255);
	strokeWeight(2);
	line(prevx,prevy,x,y);
	}

	wave.unshift(y);

	line(x,y,200,wave[0]);
	beginShape();
	noFill();
	stroke(255);
	strokeWeight(1);
	for (let i = 0; i < wave.length; i++) {
		vertex(i + 200,wave[i]);
	}
	endShape();

	if (wave.length > 1000) {
		wave.pop();
	}


	theta += 0.05; 
}