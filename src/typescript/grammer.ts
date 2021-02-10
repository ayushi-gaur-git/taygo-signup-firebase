var x = 1; // inferred as number

var y; //by defauly any

var firstName= 'Ayushi';

var lastName:string = 'Gaur';

var num1 = 1100;
var num2: number = 20;

function addnumber(n1:number, n2:number, n3:number) {
  var result = n1 + n2 + n3;
  // alert("Sum is : " + result);
}

addnumber(num1, num2, 7);

var areaSquare = function (rect: { h: number, w?: number}) {
    if(rect.w === undefined) {
      return rect.h * rect.h;
    }
    return rect.h * rect.w;
}

var sq1 = areaSquare({ h : 10});
console.log("Area of rectangle is : "+sq1);

var sq2 = areaSquare({ h : 10, w: 20 });
console.log("Area of rectangle is : "+sq2);

var helloWorld: (name?: string) => void;
helloWorld = (name?: string) => {
  console.log("Hello "+ (name || 'Unknown Person'));
}

helloWorld();
helloWorld("Ayushi");

interface SquareFn {
  (x: number): number;
}

var Square : SquareFn = (num) => num * num;

interface Person {
  name: string;
  age?: number;
  kids: number;
  calcPets: () => number;
  makeYounger: (years: number) => void;
  greet: (msg: string) => string;
}

var p: Person = {
  name: "Ayushi",
  age: 25,
  kids: 4,
  calcPets: function () {
    return this.kids *2;
  },
  makeYounger: function(years: number) {
    this.age -= years;
  },
  greet: function (msg: string) {
    return msg +" ,  "+this.name;
  }
}

var pets = p.calcPets();
console.log(pets);

p.makeYounger(7);
console.log(p.age);

var msg = p.greet("Good Day to You");
console.log(msg);
