class Diamond {
  constructor(x, y, size, colour) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.colour = colour;
  }

  display() {
     // Calculate angle between mouse position and diamond center
     let dx = mouseX - this.x; // Calculate the horizontal distance between the mouse and the center of the diamond
     let dy = mouseY - this.y; // Calculate the vertical distance between the mouse and the center of the diamond
     let angle = atan2(dy, dx); // Calculate the direction angle from the center of the diamond to the mouse position


    fill(this.colour); // Fill to match the background
    //stroke(0); // Stroke for the square
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size); // Draw the square

    // Draw four circles at the corners to form a diamond
    let offsets = [-0.5, 0.5];
    noStroke();
    fill(27, 27, 37); // Fill color for the circles
    for (let dx of offsets) {
      for (let dy of offsets) {
        let rotatedX = this.x + dx * this.size * cos(angle) - dy * this.size * sin(angle);
        let rotatedY = this.y + dx * this.size * sin(angle) + dy * this.size * cos(angle);
        ellipse(rotatedX, rotatedY, this.size, this.size); // Use rotated positions
      }
    }
  }
}
