document.getElementById("name").innerHTML = "Vanina";

var bulb = {
  "element": document.querySelector("#bulb"),
  "src": {
    "on": "http://www.w3schools.com/js/pic_bulbon.gif",
    "off": "http://www.w3schools.com/js/pic_bulboff.gif"
  },
  "on": false,
  "toggle": function() {
    if (this.on) {
      this.on = false;
      this.element.src = this.src.off;
    } else {
      this.on = true;
      this.element.src = this.src.on;
    }
  }
};

var state = {
  "element": document.querySelector(".state"),
  "setState": function(on) {
    if (on) {
      this.element.innerHTML = "Encendida";
      this.element.className = "state on";
    } else {
      this.element.innerHTML = "Apagada";
      this.element.className = "state";
    }
  }
}

var elementArray = document.querySelectorAll("[data-action=toggle-bulb]");

for (var i = 0; i < elementArray.length; i++) {

  elementArray[i].addEventListener("click", function() {

    bulb.toggle();
    state.setState(bulb.on);

  });
}