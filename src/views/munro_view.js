const MunroView = function (munroListContainer, munroObject) {
  this.container = munroListContainer;
  this.munro = munroObject;
};

MunroView.prototype.render = function () {
  // create div to contain this munro's set of elements
  const munroContainer = document.createElement("div");
  munroContainer.classList.add("munro-container");
  this.container.appendChild(munroContainer);


  // make elements
  // inject values
  // append elements
  const name = document.createElement('h3');
  name.classList.add("munro-name");
  name.textContent = this.munro.name;
  munroContainer.appendChild(name);

  const munroList = document.createElement("ul");
  munroList.classList.add("munro-list");
  munroContainer.appendChild(munroList);

  const meaning = document.createElement("li");
  meaning.classList.add("munro-detail");
  meaning.textContent = this.munro.meaning;
  munroList.appendChild(meaning);

  const height = document.createElement("li");
  height.classList.add("munro-detail");
  height.textContent = this.munro.height;
  munroList.appendChild(height);
};

module.exports = MunroView;
