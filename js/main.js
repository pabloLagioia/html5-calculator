var result = 0;
var operation = [];

var operationDisplay = $("#operation-display");
var resultDisplay = $("#user-input-display");

function updateOperationDisplay() {
    operationDisplay.html(operation.join(""));
}

function updateResultDisplay() {
    resultDisplay.html(result);
}

$(document).on("click", "[data-action=insert-value]", function (event) {
    
    var target = $(event.currentTarget);

    var value = target.attr("data-value");

    operation.push(value);

    updateOperationDisplay();

});

$(document).on("click", "[data-action=execute-operation][data-operation=remove-value]", function() {

    if (operation.length == 0) {
        result = 0;
        updateResultDisplay();
    }
    
    operation.pop();

    updateOperationDisplay();

});

$(document).on("click", "[data-action=execute-operation][data-operation=calculate]", function() {

    try {

        result = eval(operation.join(""));

        operationDisplay.removeClass("error");

        updateResultDisplay();

    } catch (e) {

        operationDisplay.addClass("error");

    }

});


updateResultDisplay();
updateOperationDisplay();