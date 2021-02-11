const last = <T>(arr: Array<T>): T => {
  return arr[arr.length -1];
}

const l = last([1,2,3]);
const l2 = last<string>(["1","2","3"]);

//if we define input type explicitly then we have to create a different funtion for each inpput type
//but with generics we can have the type gerix and we can define it
// const makeArr = (x: number) => {
//   return [x];
// }

const makeArr = <T, Y>(x: T, y: Y): [T, Y] => {
  return [x,y];
}

const ob = makeArr(5,7);
const ob1 = makeArr("5","7");
const v3 = makeArr<string | null, number>("5",8);

console.log(ob,ob1);

// const makeFullName = (ob: {fName: string, lName: string}) => {
const makeFullName = <T extends {fName: string, lName: string}>(ob: T) => {
  return {
    ...ob,
    fullName: ob.fName + '' + ob.lName
  }
}

const v4 = makeFullName({fName: "Ayushi", lName: "Gaur", age: 15});
const v5 = makeFullName({fName: "Ayushi", lName: "Gaur", age: 15});
console.log(v4, v5);

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;
