const circle = require('./circle');
const myCircle = circle(4);
const value = require('./primitive');
// const add = require('./foo');
// const result = add(1,2);
const calc = require('./foo')
const result1 = calc.add(1,2,);
const result2 = calc.minus(1,2);
console.log(`지름이 4인 원의 면적 : ${myCircle.area()}`);
console.log(`지름이 4인 원의 둘레: ${myCircle.circumference()}`);
console.log(value);
// console.log(result)
console.log(result1)
console.log(result2)