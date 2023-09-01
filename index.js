// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Getter method for diameter
  get diameter() {
    return this.radius * 2;
  }

  // Getter method for circumference
  get circumference() {
    return Math.PI * this.diameter;
  }

  // Getter method for area
  get area() {
    return Math.PI * this.radius ** 2;
  }

  // Setter method for diameter
  set diameter(newDiameter) {
    this.radius = newDiameter / 2;
  }

  // Setter method for circumference
  set circumference(newCircumference) {
    this.radius = newCircumference / (Math.PI * 2);
  }

  // Setter method for area
  set area(newArea) {
    this.radius = Math.sqrt(newArea / Math.PI);
  }
}
