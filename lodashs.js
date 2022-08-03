const _ = require("lodash");

// to break into chunks
// Array

const chn = _.chunk(["a", "b", "c", "d"], 2);

console.log(chn);

const rmfalsy = _.compact(["0", "", 0, 1, 2, null, undefined]);

console.log(rmfalsy);

const rmsameVal = _.difference([1, 2, 34, 5, 6], [1, 23, 5, 6, 7, 8]);
console.log(rmsameVal);

const obj = {
  name: "zaid",
  age: 23,
  skills: { prog: "js", prog2: "py", markup: "html/css" },
};

// const obj2 = Object.assign(obj);
// console.log(obj2);
// console.log(obj);
// console.log(obj2);

const obj3 = _.cloneDeep(obj);
// console.log(obj3);
obj3.skills.prog = "jss";

console.log(obj3);
console.log(obj);
