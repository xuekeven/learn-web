// 泛型
// 泛型是指在定义函数、接口、类的时候，不先指定具体的类型，而在使用时再指定类型的一种特性。

// 1. 简单的例子
// 下面的例子中没有错误，使用了数组泛型来定义返回值的类型。但它的缺点是，它并没有准确的定义返回值的类型。
// Array<any> 允许数组的每一项都为任意类型，但我们预期的是，数组中的每一项都应是输入的 value 的类型。
function createArray1(length: number, value: any): Array<any> {
  let result = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
createArray1(3, 'x') // ['x', 'x', 'x']

// 这样，我们在函数名后添加 <T>，其中 T 用来指代任意输入的类型，
// 在之后的输入 value: T 和输出 Array<T> 中即可使用了。
// 之后在调用的时候，可以指定它的具体的类型为 string。当然，也可以不指定，让类型推论自动推算出来。
function createArray2<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
createArray2(3, 'x') // ['x', 'x', 'x']

// 2. 多个类型参数
// 定义泛型的时候，可以一次性定义多个类型参数。
function swap<T, U>(tuple: [T, U]) {
  return [tuple[1], tuple[0]]
}
swap([7, 'seven']) // ['seven', 7]

// 3. 泛型约束
// 在函数内部使用泛型变量是，由于事先不知道它是哪种类型，所以不能随意操作它的属性和方法。
function loggingIndentity1<T>(arg: T): T {
  // console.log(arg.length) // error TS2339: Property 'length' does not exist on type 'T'.
  return arg
}

// 我们可以使用对泛型进行约束，如，只允许这个函数传入那些包含 length 属性的变量，即泛型约束。
// 下面就是使用 extends 约束了泛型 T 必须符合接口 Lengthwise 的形状，即必须包含 length 属性。
interface Lengthwise {
  length: number
}
function loggingIndentity2<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

// 多个类型参数之间也可以互相约束。下面中，使用了两个类型参数。
// 其中要求 T 继承 U，这样就保证了 U 上不会出现 T 中不存在的字段。
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id]
  }
  return target
}
let x = { a: 1, b: 2, c: 3, d: 4 }
copyFields(x, { b: 10, d: 20 })

// 4. 泛型接口
// 可以使用接口的方式来定义一个函数需要符合的形状。
interface SearchFunc {
  (source: string, subString: string): boolean
}
let mySearch: SearchFunc
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1
}

// 当然也可以使用含有泛型的接口来定义函数的形状。
interface CreateArrayFunc11 {
  <T>(length: number, value: T): Array<T>
}
let createArray11: CreateArrayFunc11
createArray11 = function <T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
createArray11(3, 'x') // ['x', 'x', 'x']

// 进一步，可以把泛型参数提前到接口名上。注意，此时在使用泛型接口的时候，需要定义泛型的类型。
interface CreateArrayFunc22<T> {
  (length: number, value: T): Array<T>
}
let createArray22: CreateArrayFunc22<any>
createArray22 = function <T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
createArray22(3, 'x') // ['x', 'x', 'x']

// 5. 泛型类
// 与泛型接口类似，泛型也可以用以类的类型定义中。
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}
let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) { return x + y }

// 6. 泛型参数的默认类型
// 在 TS 2.3 以后，我们可以为泛型中的类型参数指定默认类型。
// 当使用泛型时没有在代码中直接指定类型参数，从实际值中也无法推测输出时，这个默认类型就会起作用。
function createArray<T = string>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}