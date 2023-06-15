// 任意值
// 任意值用来表示允许赋值为任意类型。

// 1. 什么是任意值类型
// 如果是普通类型，在赋值过程中改变类型是不被允许的。如果是 any 类型，则允许被赋值为任意类型。
let myNum1: string = 'seven'
let myNum2: any = 'seven'
// myNum1 = 7 // error TS2322: Type 'number' is not assignable to type 'string'.
myNum2 = 7

// 2. 任意值的属性和方法
// 在任意值上访问任何属性和调用任何方法但是允许的。
// 可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
let anyThing: any = 'hello'
console.log(anyThing.myName)
console.log(anyThing.myName.firstName)
anyThing.setName('Jerry')
anyThing.setName('Jerry').sayHello()
anyThing.myName.setFirstName('Tom')

// 3. 未声明类型的变量
// 如果在声明变量时未指定其类型，则它会被识别为任意类型。
let something;
something = 'seven';
something = 7;
something.setName('Tom');

// 类型推论
// 如果没有明确的指定类型，那么 TS 会按照类型推论的规则推断出一个类型。

// 1. 什么是类型推论
// TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。
// 如果定义时没有赋值，不管之后有无赋值，该变量都会被推断为 any 类型而不被类型检查。
let favoriteNum1 = 'seven'
let favoriteNum2: string = 'seven' // 这两个赋值是等价的
// favoriteNum1 = 7 // error TS2322: Type 'number' is not assignable to type 'string'.
// favoriteNum2 = 7 // error TS2322: Type 'number' is not assignable to type 'string'.
let favoriteNum
favoriteNum = 'seven'
favoriteNum = 7
