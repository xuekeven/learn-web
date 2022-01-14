// 声明合并
// 如果定义了两个相同名字的函数、接口、类，那么它们会被合并为一个类型。

// 1. 函数的合并
// 可以使用重载定义多个函数类型。
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}

// 2. 接口的合并
// 接口中的属性在合并时会简单的合并到一个接口中。下面中前两个相当于第三个。
interface Alarm1 {
  price: number
}
interface Alarm1 {
  weight: number
}
interface Alarm1 {
  price: number
  weight: number
}

// 但是，合并的属性的类型必须是唯一的，否则会报错。
interface Alarm2 {
  price: number
}
interface Alarm2 {
  price: number // 虽然重复，但是类型相同
  weight: number
}
interface Alarm3 {
  price: number
}
interface Alarm3 {
  // price: string // 重复，类型又不同，就会报错
  weight: number
}

// 接口中方法的合并，与函数的合并一样。下面中前两个相当于第三个。
interface Alarm5 {
  price: number
  alert(s: string): string
}
interface Alarm5 {
  weight: number
  alert(s: string, n: number): string
}
interface Alarm5 {
  price: number
  weight: number
  alert(s: string): string
  alert(s: string, n: number): string
}

// 3. 类的合并
// 同接口的合并。