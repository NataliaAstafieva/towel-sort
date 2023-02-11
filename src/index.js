
// You should implement your task here.

module.exports = function towelSort (matrix) {
let n = [];
let arr = [];
let newArr = [];
let str = '';
if (arguments.length == 0) {
  return [];
}
for (i = 0; i < matrix.length; i++) {
  n = matrix[i];
  if (i % 2 !== 0) {
    n = n.reverse();
  }
arr = arr + n + ',';
str = arr.slice(0, arr.length - 1);
newArr = str.split(',');
}
return newArr;
}