require("./lib/social");
require("./lib/ads");
var track = require("./lib/tracking");

require("component-leaflet-map");

var sections = document.querySelectorAll("section[id]");

var onScroll = function() {
  for (var i = sections.length - 1; i >= 0; i--) {
    var bounds = sections[i].getBoundingClientRect();
    if (bounds.top < 200) {
      document.body.setAttribute("data-section", sections[i].id);
      return;
    }
  }
  document.body.setAttribute("data-section", "intro");
};

onScroll();

window.addEventListener("scroll", onScroll);

document.body.addEventListener("click", function(e) {
  if (e.target.classList.contains("show-map")) {
    var element = e.target.parentElement.querySelector("leaflet-map");
    element.classList.toggle("show");
    element.map.invalidateSize();
  }
});