var Pig = function(top, left) {
  Animal.call(this, top, left);
  this.node.classList.add('pig');
}

Pig.prototype = Object.create(Animal.prototype);
Pig.prototype.constructor = Pig;