var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var last = function (arr) {
    return arr[arr.length - 1];
};
var l = last([1, 2, 3]);
var l2 = last(["1", "2", "3"]);
//if we define input type explicitly then we have to create a different funtion for each inpput type
//but with generics we can have the type gerix and we can define it
// const makeArr = (x: number) => {
//   return [x];
// }
var makeArr = function (x, y) {
    return [x, y];
};
var ob = makeArr(5, 7);
var ob1 = makeArr("5", "7");
var v3 = makeArr("5", 8);
console.log(ob, ob1);
// const makeFullName = (ob: {fName: string, lName: string}) => {
var makeFullName = function (ob) {
    return __assign(__assign({}, ob), { fullName: ob.fName + '' + ob.lName });
};
var v4 = makeFullName({ fName: "Ayushi", lName: "Gaur", age: 15 });
var v5 = makeFullName({ fName: "Ayushi", lName: "Gaur", age: 15 });
console.log(v4, v5);
