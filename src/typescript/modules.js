//internal module
//creates IIFE (immediately invoked function expression IIFE) in js
var Shapes;
(function (Shapes) {
    var Rectangle = /** @class */ (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
var rect = new Shapes.Rectangle(2, 4);
//extending module
(function (Shapes) {
    var Circle = /** @class */ (function () {
        function Circle(radius) {
            this.radius = radius;
        }
        return Circle;
    }());
    Shapes.Circle = Circle;
})(Shapes || (Shapes = {}));
var circle = new Shapes.Circle(5);
(function (Shapes) {
    var RectangleNew = /** @class */ (function () {
        function RectangleNew(height, width) {
            this.height = height;
            this.width = width;
        }
        RectangleNew.prototype.getArea = function () {
            return this.height * this.width;
        };
        return RectangleNew;
    }());
    Shapes.RectangleNew = RectangleNew;
})(Shapes || (Shapes = {}));
var rect1 = new Shapes.RectangleNew(2, 4);
console.log(rect1.getArea());
