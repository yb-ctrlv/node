const modules = require('./module');

const result = modules.calc.add(1,2);
console.log(result);

// module/print.js의 기능
modules.print.sayHello();