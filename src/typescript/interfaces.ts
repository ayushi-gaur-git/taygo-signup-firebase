interface IEngine {
  start(callback: (startStatus: boolean, engineType: string) => void): void;
  stop(callback: (startStatus: boolean, engineType: string) => void): void;
}

class Engine implements IEngine {
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

interface IAutoOptions {
  engine: IEngine;
  start: string;
  stop: string;
  make ?: string;
}

interface ITruckOptions extends IAutoOptions {
  bedLength ?: string;
  fourByFour ?: boolean;
}

class Truck {
  bedLength: string;
  fourByFour: boolean;
  options: ITruckOptions;

  constructor(data: ITruckOptions) {
    this.options = data;
    this.bedLength = data.bedLength;
    this.fourByFour = data.fourByFour;
  }
}

var truck = new Truck({
  bedLength: 'Long',
  fourByFour: true,
  engine: new Engine(300,"V8"),
  start:"Start",
  stop:"Stop"
})
console.log(truck)
