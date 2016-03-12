var name = "Pablo";

//Forma 1
var person = {
    "name": "Pablo",
    "age": 30,
    "sayHi": function() {
        alert("hola " + this.name);
    },
    "car": {
        "color": "silver",
        "make": "Peugeot"
    },
    "lastName": "Lagioia"
}

//Forma 2
var person2 = new Object();
person2.name = "Pablo";
person2.age = 30;
person2.sayHi = function() {
    alert("hola " + this.name);
};

//Forma 3
function Person(name, lastName, age, eyeColor, married, car) {
    this.name = name;
    this.age = age;
    this.lastName = lastName;
    if (eyeColor == undefined) {
        this.eyeColor = "marron";
    } else {
        this.eyeColor = eyeColor;
    }
    this.married = married;
    this.car = car;
}


Person.prototype.sayHi = function() {
    alert("hola " + this.name); 
};

function Car(make, color) {
    this.make = make;
    this.color = color;
    return undefined;
}

new Person("pablo", "apellido", 30, "Green", true, new Car("BMW", "Black"));


//Un objeto literal
var myObject = {};

//Un array
var work = [];
work.push('cafe');
work.push('javascript');
work.push('te');
work.push(123);
work.push({workName: "something"});
work.push(new Car("Lamborghini", "Diablo"));