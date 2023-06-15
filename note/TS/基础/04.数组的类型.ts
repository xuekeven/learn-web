// 数组的类型

// 1. 「类型 + 方括号」表示法
// 最简单的方法是使用「类型 + 方括号」来表示数组。
// 数组的项中不允许出现其他的类型。
// 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制。
let arr1: number[] = [1, 2, 4]
let arr2: string[] = ['1', '5']
arr1.push('arr') // Argument of type '"arr"' is not assignable to parameter of type 'number'.
let arr3: number[] = [1, '2', 4] // Type 'string' is not assignable to type 'number'.

// 2. 数组泛型
// 可以使用数组泛型（Array Generic） Array<elemType> 来表示数组。
let fibonacci: Array<number> = [1, 1, 2, 3, 5]

// 3. 用接口表示数组
// 虽然接口可以用来被描述数组，但因为很复杂，一般不这么做。
interface NumberArray {
  [index: number]: number
}
let numberArray: NumberArray = [1, 2, 4]

interface NumberArray2 {
  [index: number]: number | string
}
let numberArray2: NumberArray2 = [1, '5', 4]

// 4. 类数组
// 类数组（Array-like Object）不是数组类型，如 arguments。
// 类数组不能用普通的数组的方式来描述，而应该用接口。
// 常用的类数组都有自己的接口定义，如 IArguments，NodeList，HTMLCollection。
// function sum() {
//   let args: number[] = arguments
// }
function sum() {
  let args: {
    [index: number]: number
    length: number
    callee: Function
  } = arguments
}
interface IArguments {
  [index: number]: any
  length: number
  callee: Function
}

// 5. any 在数组中的应用
// 常见的做法是，用 any 表示数组中允许出现任意类型。
let list: any[] = [1, '2', 4, true, { name: 'kai' }]
function sum1() {
  let args: number[] = arguments;
  return args
}