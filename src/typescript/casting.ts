var table: HTMLTableElement = <HTMLTableElement>document.createElement('table');

//extending types
class Engine {
  constructor(public horsePower: number, public engineType: string){}

  start(callback: (startStatus: boolean, engineType: string) => void) {
    window.setTimeout(() => {
      callback(true, this.engineType);
    },1000);
  }

  stop(callback: (startStatus: boolean, engineType: string) => void) {
    window.setTimeout(() => {
      callback(true, this.engineType);
    },1000);
  }
}

class Accessory {
  constructor(public accessoryNumber: number, public title: string) {}
}

class Auto {
  public basePrice: number;
  private _engine: Engine;
  make: string;
  model: string;
  accessoryList: string;

  constructor(basePrice: number, engine: Engine, make: string, model: string) {
    this.engine = engine;
    this.basePrice = basePrice;
    this.make = make;
    this.model = model;
  }

  calculateTotal() : number {
    var rate = 0.8;
    return this.basePrice | (rate * this.basePrice);
  }

  addAccessories(...accessories: Accessory[]) {
    this.accessoryList = '';
    for (var i=0; i < accessories.length; i++) {
      var ac = accessories[i];
      this.accessoryList += ac.accessoryNumber+ ''+ac.title+'<br />';
    }
  }

  getAccessories(): string {
    return this.accessoryList;
  }

  get engine(): Engine {
    return this._engine;
  }

  set engine(value: Engine) {
    if(value == undefined) throw "Supply an Engine";
    this._engine = value;
  }

}

class Truck extends Auto {
  bedLength: string;
  fourByfour: boolean;

  constructor(basePrice: number, engine: Engine, make: string, model: string, bedLength: string, fourByfour: boolean) {
    super(basePrice, engine, make, model);

    this.bedLength = bedLength;
    this.fourByfour = fourByfour;
  }
}

var truck = new Truck (6000, new Engine(300, "V8"), "Make", "Model", "Long Bed", true);
console.log(truck);
console.log(truck.calculateTotal());
truck.addAccessories(new Accessory(1234,"Acc1"),new Accessory(12345,"Acc2"));
console.log(truck.getAccessories())
truck.engine.start((status: boolean, engineType: string) => {
  console.log("Start "+engineType);
});
