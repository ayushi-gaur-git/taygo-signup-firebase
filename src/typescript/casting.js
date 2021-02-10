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
var table = document.createElement('table');
//extending types
var Engine = /** @class */ (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    Engine.prototype.start = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    Engine.prototype.stop = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    return Engine;
}());
var Accessory = /** @class */ (function () {
    function Accessory(accessoryNumber, title) {
        this.accessoryNumber = accessoryNumber;
        this.title = title;
    }
    return Accessory;
}());
var Auto = /** @class */ (function () {
    function Auto(basePrice, engine, make, model) {
        this.engine = engine;
        this.basePrice = basePrice;
        this.make = make;
        this.model = model;
    }
    Auto.prototype.calculateTotal = function () {
        var rate = 0.8;
        return this.basePrice | (rate * this.basePrice);
    };
    Auto.prototype.addAccessories = function () {
        var accessories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accessories[_i] = arguments[_i];
        }
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + '' + ac.title + '<br />';
        }
    };
    Auto.prototype.getAccessories = function () {
        return this.accessoryList;
    };
    Object.defineProperty(Auto.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw "Supply an Engine";
            this._engine = value;
        },
        enumerable: false,
        configurable: true
    });
    return Auto;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(basePrice, engine, make, model, bedLength, fourByfour) {
        var _this = _super.call(this, basePrice, engine, make, model) || this;
        _this.bedLength = bedLength;
        _this.fourByfour = fourByfour;
        return _this;
    }
    return Truck;
}(Auto));
var truck = new Truck(6000, new Engine(300, "V8"), "Make", "Model", "Long Bed", true);
console.log(truck);
console.log(truck.calculateTotal());
truck.addAccessories(new Accessory(1234, "Acc1"), new Accessory(12345, "Acc2"));
console.log(truck.getAccessories());
truck.engine.start(function (status, engineType) {
    console.log("Start " + engineType);
});
