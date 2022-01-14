// 函数的类型

// 1. 函数声明
// 一个函数有输入和输出，要在 TS 中对其约束，输入和输出都要考虑到。函数声明的类型定义较简单。
// 输入多余的（或者少于要求的）参数，是不被允许的。
function sum1(x: number, y: number): number {
  return x + y
}
sum1(1, 2)
// sum1(1, 2, 3) // error TS2346: Supplied parameters do not match any signature of call target.
// sum1(1)       // error TS2346: Supplied parameters do not match any signature of call target.

// 2. 函数表达式
// sum2 的代码只对等号右侧的匿名函数就行了类型定义，而等号左侧的 sum2 是通过赋值操作进行类型推论而推断出来的。
// 如果需要手动添加类型，应该是 sum3 的代码。
// 在 TS 中，=> 用来表示函数的定义，左侧是输入类型，需要用括号括起来；右侧是输出类型。
let sum2 = function (x: number, y: number): number {
  return x + y
}
let sum3: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}

// 3. 用接口定义函数
// 采用函数表达式或接口定义函数的方式时，对等号左侧进行类型限制，
// 可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。
interface SearchFunc {
  (source: string, subString: string): boolean
}
let mySearch: SearchFunc = function (source: string, subString: string) {
  return source.search(subString) !== -1
}

// 4. 可选参数
// 与接口中的可选属性类似，用 ？ 表示可选的参数。
// 可选参数必须接在必需参数后面，就是，可选参数后面不允许再出现必需参数。
function buildNmae1(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}
let tomcatName = buildNmae1('Tom', 'Cat')
let tomName = buildNmae1('Tom')

// 5. 参数默认值
// ES6 允许给函数添加默认值，TS 也会将添加了默认值的参数识别为可选参数。
// 此时，其不受「可选参数必须接在必需参数后面」的限制了。
function buildName2(firstName: string, lastName: string = 'Cat') {
  return firstName + ' ' + lastName
}
function buildName3(firstName: string = 'Tom', lastName: string) {
  return firstName + ' ' + lastName
}

// 6. 剩余参数
// ES6 中可以使用 ...reat 的方式获取函数找那个的剩余参数。
// 事实上，rest 是一个数组，所以我们可以用数组的类型来定义它。
function push(array: any[], ...items: any[]) {
  items.forEach(function (item) {
    array.push(item)
  })
}
let a = []
push(a, 1, 2, 3)

// 7. 重载
// 重载允许一个函数接受不同数量或类型的参数是，作出不同的处理。
// 重复定义了多次函数，前几次都是函数定义，最后一次是函数实现。
// TS 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。
// 如果没有重载（没有前面的函数定义，只有函数实现），缺点是不能够精确的表达。
// 精确的表达是指，输入为数字时输出也应该为数字，输入为字符串，输出也应该为字符串。
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}