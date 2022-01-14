// 原始数据类型
// JS 的数据类型：原始数据类型，对象数据类型。
// JS 原始数据类型：Null，Undefined，Boolean，Number，String，Symbol，BigInt。

// 1. 布尔值
// 使用 boolean 来定义布尔值类型。
// 直接调用 Boolean 也返回一个 boolean 类型。但是，使用构造函数 Boolean 创造的对象不是布尔值，
// 而是一个 Boolean 对象。这方面来说，其他类型的构造函数同理（除 null 和 undefined）。
let isDone: boolean = false
let createdByBoolean: boolean = Boolean(1)
// let createdBynewBoolean: boolean = new Boolean(1) // Type 'Boolean' is not assignable to type 'boolean'.

// 2. 数值
// 使用 number 来定义数值类型。
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLinteral: number = 0b1010
let octalLiteral: number = 0o744
let notANumber: number = NaN
let infinityNumber: number = Infinity

// 3. 字符串
// 使用 string 来定义字符串类型。
let myName: string = 'Tom'
let myAge: number = 25
let sentence: string = `Hello, I am ${myName}.I will be ${myAge + 1} years old tomorrow.`

// 4. 空值
// JS 中没有空值的概念，在 TS 中可用 void 表示没有任何返回值的函数。
// 声明一个 void 类型的变量没有什么用，只能将其赋值为 null 或 undefined。
function alertName(): void {
  alert('Now is alerting!')
}
let unusable: void = undefined

// 5. Null 和 Undefined
// 使用 null 和 Undefined 来定义这两个类型。
// 与 void 的区别是，null 和 undefined 是所有类型的子类型。
// 所以，这两个类型的变量，可以赋值给其他类型的变量。而 void 类型的变量不能赋值给其他类型的变量。
let u: undefined = undefined
let n: null = null
let num: number = undefined
let num1: number = u
let num2: number = n
let u3: undefined
let num3: number = u3
let u4: void
// let num4: number = u4 // Type 'void' is not assignable to type 'number'.