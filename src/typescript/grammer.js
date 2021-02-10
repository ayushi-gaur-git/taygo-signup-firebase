var x = 1; // inferred as number
var y; //by defauly any
var firstName = 'Ayushi';
var lastName = 'Gaur';
var num1 = 1100;
var num2 = 20;
function addnumber(n1, n2, n3) {
    var result = n1 + n2 + n3;
    // alert("Sum is : " + result);
}
addnumber(num1, num2, 7);
var areaSquare = function (rect) {
    if (rect.w === undefined) {
        return rect.h * rect.h;
    }
    return rect.h * rect.w;
};
var sq1 = areaSquare({ h: 10 });
console.log("Area of rectangle is : " + sq1);
var sq2 = areaSquare({ h: 10, w: 20 });
console.log("Area of rectangle is : " + sq2);
var helloWorld;
helloWorld = function (name) {
    console.log("Hello " + (name || 'Unknown Person'));
};
helloWorld();
helloWorld("Ayushi");
var Square = function (num) { return num * num; };
var p = {
    name: "Ayushi",
    age: 25,
    kids: 4,
    calcPets: function () {
        return this.kids * 2;
    },
    makeYounger: function (years) {
        this.age -= years;
    },
    greet: function (msg) {
        return msg + " ,  " + this.name;
    }
};
var pets = p.calcPets();
console.log(pets);
p.makeYounger(7);
console.log(p.age);
var msg = p.greet("Good Day to You");
console.log(msg);
var Car = /** @class */ (function () {
    function Car(engine) {
        this._engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'Invalid Engine';
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
