var Animal = function(top, left) {
  var context = this;
  this.node = document.createElement('span');
  this.node.classList.add('animal');

  this.hunger = 0;
  this.top = top;
  this.left = left;

  // Set initial position of animal
  this.setPosition(this.top, this.left);

  // Add click event handler to feed animal
  this.node.onclick = function() {
    context.feed();
  }

  // Increase hunger and move animal over time
  setInterval(function() {
    this.increaseHunger();
    this.move();
  }.bind(this), 3000);
}

Animal.prototype.increaseHunger = function() {
  if (this.hunger > 5) {
    this.node.classList.add('hungry');
  }
  this.hunger <= 10 && this.hunger++;
}

Animal.prototype.feed = function() {
  this.hunger = 0;
  this.node.classList.remove('hungry');
}

Animal.prototype.setPosition = function(top, left) {
  this.node.style.setProperty('top', top + 'px');
  this.node.style.setProperty('left', left + 'px');
}

Animal.prototype.move = function() {
  var topPosition = this.top * Math.random() + 'px';
  var leftPosition = this.left * Math.random() + 'px';

  this.node.style.setProperty('top', topPosition);
  this.node.style.setProperty('left', leftPosition);
}