class Car {
  engine:string;

  constructor(engine: string) {
    this.engine = engine;
  }

  start() {
    alert("Engine Started"+ this.engine);
  }

  stop() {
    alert("Engine Stopped"+ this.engine);
  }
}

var car = new Car('V8');
// car.start();
// car.stop();

//getter and setter
//for compiling this es5 feature use tsc -t es5
class Car1 {
  private _engine:string;

  constructor(engine: string) {
    this._engine = engine;
  }

  get engine():string {
    return this._engine;
  }

  set engine(value: string) {
    if(value == undefined) throw 'Invalid Engine';
    this._engine = value;
  }
}

var car1 = new Car1("Car Engine");
console.log(car1);


//complex class
class Engine {
  constructor(public horsePower: number, public engineType: string) {}
}

class Car2 {
  private _engine: Engine;

  constructor(engine: Engine) {
    this.engine = engine;
  }

  get engine(): Engine {
    return this._engine;
  }

  set engine(value: Engine) {
    if(value == undefined) throw "No Engine Found";
    this._engine = value;
  }

  start() {
    console.log("Engine Started"+ this._engine.engineType);
  }

  stop() {
    console.log("Engine Stopped"+ this._engine.engineType);
  }
}
var engine = new Engine(300, 'V8');
var car2 = new Car2(engine);
console.log(car2.engine);
car2.start();
car2.stop();
