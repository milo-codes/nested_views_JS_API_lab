const MunroView = function (munroListContainer, munroObject) {
  this.container = munroListContainer;
  this.munro = munroObject;
};

MunroView.prototype.render = function () {

  // grab values
  const nameValue = this.munro.name;
  const meaningValue = this.munro.meaning;
  const heightValue = this.munro.height;
  // make elements
  // inject values
  // append elements
  const name = document.createElement('h3');
  name.classList.add("munro-name");
  name.textContent = nameValue;
  this.container.appendChild(name);
};

module.exports = MunroView;
