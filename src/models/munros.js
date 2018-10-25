const RequestHelper = require("../helpers/request_helper.js");
const PubSub = require("../helpers/pub_sub.js");

const Munros = function () {
  this.munros = [];
}

Munros.prototype.getData = function () {
  const requestHelper = new RequestHelper("https://munroapi.herokuapp.com/api/munros");
  requestHelper.get( (data) => {
    // data is array of munro objects
      // with keys: name
      //            meaning
      //            height

    // save or manipulate data
    this.munros = data;

    // publish data to channel
    PubSub.publish("MunroListView:munro-data-ready", this.munros);
  });
};

module.exports = Munros;
