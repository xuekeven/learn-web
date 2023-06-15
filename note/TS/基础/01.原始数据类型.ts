// 原始数据类型
JS 的数据类型两大类：原始数据类型和对象数据类型。
原始数据类型共七种：Null，Undefined，Boolean，Number，String，Symbol，BigInt。
这里主要介绍前五种原始数据类型在 TypeScript 中的应用。

// 1. 布尔值
// 使用 boolean 来定义布尔值类型。
// 直接调用 Boolean() 返回 boolean 类型。但是，使用构造函数 new Boolean() 创造的对象不是布尔值，而是 Boolean 对象。
// 这方面来说，其他类型的构造函数同理（除 null 和 undefined）。
let isDone: boolean = false
let createdByBoolean: boolean = Boolean(1)
let createdBynewBoolean: boolean = new Boolean(1) // Type 'Boolean' is not assignable to type 'boolean'.

// 2. 数值
// 使用 number 来定义数值类型。
let decLiteral: number = 6
let hexLiteral: number = 0xf00d // ES6 中的二进制表示法，会被编译为十进制数字。
let binaryLinteral: number = 0b1010 // ES6 中的八进制表示法，会被编译为十进制数字。
let octalLiteral: number = 0o744
let notANumber: number = NaN
let infinityNumber: number = Infinity

// 3. 字符串
// 使用 string 来定义字符串类型。
let myName: string = 'Tom'
let myAge: number = 25
let sentence: string = `Hello, I am ${myName}.I will be ${myAge + 1} years old tomorrow.`

// 4. 空值
// JS 中没有空值（Void）的概念，在 TS 中可用 void 表示没有任何返回值的函数。
// 声明一个 void 类型的变量没有什么用，只能将该变量赋值为 null 或 undefined。
function alertName(): void {
  alert('Now is alerting!')
}
let unusable: void = undefined

// 5. Null 和 Undefined
// 使用 null 和 Undefined 来定义这两个类型。
// void、null 和 undefined， 这三个类型的变量，都不能赋值给其他类型的变量。
let u: undefined = undefined
let n: null = null
let v: void
let num: number = undefined
let num1: number = u // Type 'undefined' is not assignable to type 'number'。
let num2: number = n // Type 'null' is not assignable to type 'number'。
let num4: number = v // Type 'void' is not assignable to type 'number'。