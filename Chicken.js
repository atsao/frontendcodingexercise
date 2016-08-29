var Chicken = function(top, left) {
  Animal.call(this, top, left);
  this.node.classList.add('chicken');
}

Chicken.prototype = Object.create(Animal.prototype);
Chicken.prototype.constructor = Chicken;

// Chickens get hungrier faster
Chicken.prototype.increaseHunger = function() {
  if (this.hunger > 5) {
    this.node.classList.add('hungry');
  }
  if (this.hunger <= 10) {
    this.hunger += 2;
  }
}