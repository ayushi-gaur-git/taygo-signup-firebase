"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello World";
console.log(message);
var x = 10;
var y = 20;
var flag = true;
var total = 0;
var name = "Ayushi";
//template strings can extend to multi line
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
var n = null;
var u = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//tuple
var person1 = ["ayushi", 22];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
console.log(c); // 0 index
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 5] = "Red";
    Color1[Color1["Yellow"] = 6] = "Yellow";
    Color1[Color1["Blue"] = 7] = "Blue";
})(Color1 || (Color1 = {}));
;
var c1 = Color1.Yellow;
console.log(c1); // 6 index
//any type
var random = 10;
random = true;
random = "Ayushi";
console.log(random.name);
random();
random.toUpperCase();
//unknown
var var1 = 20;
var1.toUpperCase();
//function call
//? is optional value
function add(num1, num2) {
    // console.log(num2) //undefined
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
// console.log(add(5,10));
// console.log(add(5));
//default value function
function add1(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
// console.log(add1(5,20));
// console.log(add1(5));
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Ayushi",
    lastName: "Gaur"
};
fullName(p);
function fullName1(person) {
    // console.log(`${person.firstName} ${person.lastName}`);
}
fullName1(p);
//class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        // console.log(`Good morning ${this.employeeName}`);
    };
    return Employee;
}());
var emp1 = new Employee("Ayushi");
// console.log(emp1.employeeName);
// console.log(greet)
// emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.work = function () {
        console.log("Manager delegating Task " + this.employeeName);
    };
    return Manager;
}(Employee));
var m1 = new Manager("Ayushi Gaur");
// console.log(m1.employeeName);
// m1.work();
// m1.greet();
