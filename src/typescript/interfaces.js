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
var Truck = /** @class */ (function () {
    function Truck(data) {
        this.options = data;
        this.bedLength = data.bedLength;
        this.fourByFour = data.fourByFour;
    }
    return Truck;
}());
var truck = new Truck({
    bedLength: 'Long',
    fourByFour: true,
    engine: new Engine(300, "V8"),
    start: "Start",
    stop: "Stop"
});
console.log(truck);
