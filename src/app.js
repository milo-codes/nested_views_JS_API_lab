const MunroListView = require("./views/munros_list_view.js");
const Munros = require("./models/munros.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  // create and assign list view
  const munroListContainer = document.querySelector("#munro-list");
  const munroListView = new MunroListView(munroListContainer);
  // get container to listen for API data
  munroListView.bindEvents();

  // create munros object and get data from API
  const munros = new Munros();
  munros.getData();
});
