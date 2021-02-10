export {};
let message = "Hello World";
console.log(message);

let x=10;
const y =20;

let flag: boolean = true;
let total: number = 0;
let name: string = "Ayushi";

//template strings can extend to multi line

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

//tuple

let person1: [string, number] = ["ayushi",22];

//enum

enum Color {Red, Yellow, Blue};

let c: Color = Color.Red;

console.log(c); // 0 index

enum Color1 {Red = 5, Yellow, Blue};

let c1: Color1 = Color1.Yellow;

console.log(c1); // 6 index

//any type

let random: any = 10;
random = true;
random = "Ayushi";

console.log(random.name);
random();
random.toUpperCase();

//unknown

let var1: unknown  = 20;
(var1 as string).toUpperCase();

//function call
//? is optional value
function add(num1: number, num2?: number): number {
  // console.log(num2) //undefined
  if(num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}

// console.log(add(5,10));
// console.log(add(5));

//default value function

function add1(num1: number, num2: number = 10): number {
    return num1 + num2;
}

// console.log(add1(5,20));
// console.log(add1(5));

function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: "Ayushi",
    lastName: "Gaur"
}

fullName(p);

//interface

interface Person {
    firstName: string;
    lastName?: string;
}

function fullName1(person: Person) {
    // console.log(`${person.firstName} ${person.lastName}`);
}

fullName1(p);

//class

class Employee {
  protected employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
      // console.log(`Good morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("Ayushi");
// console.log(emp1.employeeName);
// console.log(greet)
// emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
      super(managerName)
    }

    work() {
      console.log(`Manager delegating Task ${this.employeeName}`);
    }
}

let m1 = new Manager("Ayushi Gaur");
// console.log(m1.employeeName);
// m1.work();
// m1.greet();
