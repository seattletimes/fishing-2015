require("./lib/social");
require("./lib/ads");
var track = require("./lib/tracking");

var sections = document.querySelectorAll("section.primary[id]");

window.addEventListener("scroll", function() {
  for (var i = 0; i < sections.length; i++) {
    var bounds = sections[i].getBoundingClientRect();
    if (bounds.top < 100 && bounds.bottom > 0) {
      document.body.setAttribute("data-section", sections[i].id);
      return;
    }
  }
});