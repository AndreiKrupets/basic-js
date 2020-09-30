const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  for (let member of arr) {
    if (typeof member === 'string') {
      switch (member) {
       case "--discard-next":
        arr = arr.splice(arr.indexOf(member), 2)
        break;
       case "--discard-prev":
        arr = arr.splice(arr.indexOf(member)-1, 2)
        break;
       case "--double-next":
        member = arr[arr.indexOf(member) + 1];
        break;
       case "--double-prev":
         member = arr[arr.indexOf(member) - 1];
         break; }
    }
  }
  return arr;
};
