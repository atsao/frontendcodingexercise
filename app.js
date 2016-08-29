window.onload = function() {
  var buttons = document.querySelectorAll('.animal-btn');
  var farm = document.getElementById('farm');

  Array.prototype.forEach.call(buttons, function(button, i) {
    button.onclick = function(e) {
      var animalFunctionName = this.dataset.animalCreatorFxn;
      var animalFunction = window[animalFunctionName];

      var animal = new animalFunction(
        farm.getBoundingClientRect().height * Math.random(),
        farm.getBoundingClientRect().width * Math.random(),
        Math.random()
      );

      farm.appendChild(animal.node);
    };
  });
}