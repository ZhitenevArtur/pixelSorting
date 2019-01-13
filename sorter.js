var img;
function setup(){
	createCanvas(700, 700);
	img = createImage(700, 700, RGB);
	img.loadPixels();

	// for (y = 0; y < img.height; y++) {
	// 	for (x = 0; x < img.width; x++) {
	// 		img.pixels[]
	// 	}
	// }	
	for (y = 0; y < img.height; y++) {
		for (x = 0; x < img.width; x++) {
			var red = random(255);
			var green = random(255);
			var blue = random(255);
			var alpha = 255;
			var color = ~~(0.2126*red+0.7152*green+0.0722*blue);
			writeColor(img, x, y, color);
		}
	}
	img.updatePixels();
	// background(51);
	// img = loadImage("sunflower.jpg");
	
}

function draw () {
	image(img, 0, 0);
}

function writeColor(image, x, y, color) {
	var index = (x + y * width) * 4;
	image.pixels[index] = color;
	image.pixels[index + 1] = color;
	image.pixels[index + 2] = color;
	image.pixels[index + 3] = 255;
}