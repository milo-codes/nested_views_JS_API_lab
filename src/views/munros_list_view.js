const PubSub = require("../helpers/pub_sub.js");
const MunroView = require("./munro_view.js");

const MunroListView = function (container) {
  this.container = container;
}

MunroListView.prototype.bindEvents = function () {
  // listen for munros data from API
  PubSub.subscribe("MunroListView:munro-data-ready", (event) => {
    // save data
    this.munros = event.detail;
    // render data
    this.render();
  });
};

MunroListView.prototype.render = function () {
  this.munros.forEach((munro) => {
    const munroView = new MunroView(this.container, munro);
      // create Munro view
      // pass in munro data
    munroView.render();
      // .render
  });
};

module.exports = MunroListView;
