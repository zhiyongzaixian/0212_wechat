let arr = [2,3,4,5,6,7]

// splice(start, deleteCount) 会修改原数组
// console.log(arr.splice(2, 2));
// console.log(arr);

// slice(start, end?) 不会修改原数组， 截取包含起始位置，不包含结束位置元素

console.log(arr.slice(2, 4));
console.log(arr);
