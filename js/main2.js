var calculator = {
    "display": {
        "input": $("#operation-display"),
        "result": $("#user-input-display")
    },
    "ecuation": [],
    "resolve": function () {
        throw new Error("Not implemented yet");
    },
    "insertValue": function(value) {

        this.ecuation.push(value);

        this.display.input.html(this.ecuation.join(""));

    },
    "removeLastValue": function() {
        this.ecuation.pop();

        this.display.input.html(this.ecuation.join(""));

    }
};

/**Para aplicar el evento al elemento al hacer click. (JQuery) **/
$("[data-action=insert-value]").on("click", function(event) {
    calculator.insertValue($(event.currentTarget).attr("data-value"));
});

$("[data-operation=remove-value]").on("click", function(event) {
    calculator.removeLastValue();
});

$("[data-operation=calculate]").on("click", function(event) {
    calculator.resolve();
});