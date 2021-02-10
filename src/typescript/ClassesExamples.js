var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        alert("Engine Started" + this.engine);
    };
    Car.prototype.stop = function () {
        alert("Engine Stopped" + this.engine);
    };
    return Car;
}());
var car = new Car('V8');
// car.start();
// car.stop();
//getter and setter
//for compiling this es5 feature use tsc -t es5
var Car1 = /** @class */ (function () {
    function Car1(engine) {
        this._engine = engine;
    }
    Object.defineProperty(Car1.prototype, "engine", {
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
    return Car1;
}());
var car1 = new Car1("Car Engine");
console.log(car1);
//complex class
var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Car2 = /** @class */ (function () {
    function Car2(engine) {
        this.engine = engine;
    }
    Object.defineProperty(Car2.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw "No Engine Found";
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    Car2.prototype.start = function () {
        console.log("Engine Started" + this._engine.engineType);
    };
    Car2.prototype.stop = function () {
        console.log("Engine Stopped" + this._engine.engineType);
    };
    return Car2;
}());
var engine = new Engine(300, 'V8');
var car2 = new Car2(engine);
console.log(car2.engine);
car2.start();
car2.stop();
