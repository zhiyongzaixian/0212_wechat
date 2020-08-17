let arr = [1,2,3,4,5];
/* 
	reduce: 累计器
		1. 传参个数： 2 || 1
		2. pre： 第二个参数或者是数组的第一项（reduce参数为1个的时候）
		3. next: 目标数组的每一项
 
 */
// let result = arr.reduce((pre, next) =>  {
// 	console.log(pre, next)
// 	// return 上次累加结果
// 	return pre + next;
// }, 0)


let result = arr.reduce((pre, next) =>  {
	console.log(pre, next)
	// return 上次累加结果
	return pre + next;
})
console.log('result', result)