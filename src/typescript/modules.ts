//internal module
//creates IIFE (immediately invoked function expression IIFE) in js
namespace Shapes {
  export class Rectangle {
    constructor(public height: number, public width: number) {

    }
  }
}

var rect = new Shapes.Rectangle(2,4);

//extending module
namespace Shapes {
  export class Circle {
    constructor(public radius: number) {

    }
  }
}

var circle = new Shapes.Circle(5);

interface IRectangle {
  height: number;
  width: number;
  getArea(): number;
}

namespace Shapes {
  export class RectangleNew implements IRectangle {
    constructor(public height: number, public width: number) {

    }

    getArea() {
      return this.height * this.width;
    }
  }
}

var rect1 : IRectangle = new Shapes.RectangleNew(2,4);
console.log(rect1.getArea());
