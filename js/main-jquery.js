$("#name").html("Pablo");

var bulb = {
  "element": $("#bulb"),
  "src": {
    "on": "http://www.w3schools.com/js/pic_bulbon.gif",
    "off": "http://www.w3schools.com/js/pic_bulboff.gif"
  },
  "on": false,
  "toggle": function() {
    if (this.on) {
      this.on = false;
      this.element.attr("src", this.src.off);
    } else {
      this.on = true;
      this.element.attr("src", this.src.on);
    }
  }
};

var state = {
  "element": $(".state"),
  "setState": function(on) {
    if (on) {
      this.element.html("Encendida").addClass("on");
    } else {
      this.element.html("Apagada");
      this.element.removeClass("on");
    }
  }
}

$("[data-action=toggle-bulb]").on("click", function() {
  bulb.toggle();
  state.setState(bulb.on);
});