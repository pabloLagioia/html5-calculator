

function removeClass(element, selector) {

  var classArray = element.className.split(" ");
  var selectorIndex = classArray.indexOf(selector);

  if (selectorIndex != -1) {

    classArray.splice(selectorIndex, 1);

    element.className = classArray.join(" ");

  }

}


var cssUtils = {

  "removeClass": function(element, selector) {

    element.className = element.className.split(" ").filter(function(it) {
      return it != selector;
    }).join(" ");

  },

  "addClass": function(element, selector) {

    if (element.className.split(" ").indexOf(selector) == -1) {
      element.className += " " + selector;
    }

  },

  "hasClass": function(element, class) {

    return element.className.split(" ").indexOf(class) != -1;

  }

}