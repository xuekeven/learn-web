// 接口
// 在 TS 中，我们使用接口（Interfaces）来定义对象的类型。

// 1. 什么是接口
// 接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体的行动需要类（classes）去实现（implement）。

// 2. 例子
// 接口一般首字母大写。
// 定义的变量比接口少或是多了，都是不被允许的。
// 赋值的时候，变量的形状必须和接口的形状保持一致。
interface Person {
  name: string
  age: number
}
let tomPerson: Person = {
  name: 'Tom',
  age: 25
}

// 3. 可选属性
// 不希望完全匹配一个形状，可以用可选属性。
// 可选属性的含义是该属性可以不存在，但仍然不允许添加未定义的属性。
interface Person1 {
  name: string
  age?: number
}
let tom1: Person1 = {
  name: 'Tom'
}

// 4. 任意属性
// 希望接口允许有任意的属性，可以用任意属性。
// 一但定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集。
// 一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，可在任意属性中使用联合类型。
interface Person2 {
  name: string
  age?: number
  [propName: string]: any
}
let tom2: Person2 = {
  name: 'Tom',
  gender: 'male'
}
interface Person3 {
  name: string
  age?: number
  [propName: string]: string
}
let tom3: Person3 = {
  name: 'Tom',
  age: 25,
  gender: 'male'
}
interface Person4 {
  name: string
  age?: number
  [propName: string]: string | number 
}
let tom4: Person4 = {
  name: 'Tom',
  age: 25,
  gender: 'male'
}
interface Persons {
  name: string
  age?: number
  [propName: string]: string | number | undefined
}
let toms: Persons = {
  name: 'Tom',
  age: 25,
  gender: 'male'
}

// 5.只读属性
// 希望对象中的一些字段只能在创建的时候被赋值，可以用 readonly 定义只读属性。
// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候。
interface Person5 {
  readonly id: number
  name: string
  age?: number
  [propName: string]: any
}
let tom5: Person5 = {
  id: new Date().getTime(),
  name: 'Tom'
}
tom5.id = 1
let tom6: Person5 = {
  name: 'Tom'
}
tom6.id = 1