// 类型断言
// 类型断言（Type Assertion）可以用来手动指定一个值的类型。

// 1. 语法
// 方式一：值 as 类型；方式二：<类型>值。
// 在 tsx 中，必须使用前者：值 as 类型，也建议统一使用「值 as 类型」这个语法。

// 2. 用途
// ① 将一个联合类型断言为其中一个类型
// 当 TS 不确定一个联合类型的变量是哪个类型的时候，我们只能访问该联合类型的所有类型中共有的属性或方法。
// 但有时，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法。此时可以使用类型断言。
// 需要注意的是，类型断言只能够欺骗 TS 编译器，无法避免运行时的错误，滥用类型断言可能会导致运行错误。
// 使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误。
interface Cat {
  name: string
  run(): void
}
interface Fish {
  name: string
  swim(): void
}
function isFish1(animal: Cat | Fish) {
  if (typeof animal.swim === 'function') return true 
  else return false 
}
function isFish2(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') return true
  else return false
}

// ② 将一个父类断言为更加具体的子类
// 当类之间有继承关系时，类型断言也很常见。
class ApiError extends Error {
  code: number = 0
}
class HttpError extends Error {
  statusCode: number = 200
}
function isApiError(error: Error) {
  if (typeof (error as ApiError).code === 'number') return true
  else return false
}

// ③ 将任何一个类型断言为 any
// 在 any 类型的变量上，访问任何属性都是允许的。将一个变量断言为 any 是解决 TS 中类型问题的最后一个手段。
// 它极有可能掩盖了真正的类型错误，所以不是非常确定，就不要使用 as any。
// 一方面不能滥用 as any，另一方面也不要完全否定它的作用，我们需要在类型的严格性和开发的便利性之间掌握平衡。
window.foo = 1
(window as any).foo = 1

// ④ 将 any 断言为一个具体的类型
// 在开发中，非常有可能遇到 any 类型的变量。我们可以选择改进它，任由其滋生更多的 any，
// 也可以选择改进它，通过断言类型及时的吧 any 断言为精确的类型，让我们的代码向着可维护性的目标发展。
function getCacheData(key: string): any {
  return (window as any).cache[key]
}
interface Cat {
  name: string
  run(): void
}
const tom = getCacheData('tom') as Cat
tom.run()

// 3. 类型断言的限制
// 由上，已知：
// ① 联合类型可以被断言为其中一个类型
// ② 父类可以被断言为子类
// ③ 任何类型都可以被断言为 any
// ④ any 可以被断言为任何类型
// 类型断言的限制，就是，并不是任何一个类型都可以被断言为另一个类型。
// 具体而言，若 A 兼容 B，那么 A 能够被断言为 B，B 也能被断言为 A。
// 下面例子当中，Cat 包含了 Animal 中的所有属性，初此之外，Cat 还有额外的方法，
// 这等价于 Cat extends Animal，Cat 类型的 tomCat 可以赋值给 Animal 类型的 animal。
// 专业的说法是，Animal 兼容 Cat。这时，它们就可以相互进行类型断言。
// 允许 animal as Cat，是因为「父类可以被断言为子类」。
// 允许 cat as Animal，是因为子类拥有父类的属性和方法，则被断言为父类，获取父类的属性、调用父类的方法，不会有问题。
interface Animal {
  name: string
}
interface Cat {
  name: string
  run(): void
}
interface Cat extends Animal {
  run(): void
}
let tomCat: Cat = {
  name: 'Tom',
  run: () => { console.log('run') }
}
let animal: Animal = tomCat
function testAniaml(animal: Animal) {
  return (animal as Cat)
}
function testCat(cat: Cat) {
  return (cat as Animal)
}
// 所以，综上所述：
// ⑤ 要使得 A 能够内断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可。

// 4. 双重断言
// 既然，任何类型都可以被断言为 any，且 any 可以被断言为任何类型。
// 那么，我们能够将任何一个类型断言为任何另一个类型。但这种双重断言，十有八九十错误的。
// 除非迫不得已，千万别用双重断言。

// 5. 类型断言 VS 类型转换
// 类型断言只会影响编译时的类型，类型断言语句在编译结果中会被删除。
// 类型断言不是类型转换，不会真的影响到变量的类型。要进行类型转换，需要直接调用类型转换的方法。

// 6. 类型断言 VS 类型声明
function getCaCheData(key: string): any {
  return (window as any).cache[key]
}
interface Cat {
  name: string
  run(): void
}
const tomCat1 = getCaCheData('tom') as Cat
const tomCat2: Cat = getCaCheData('tom')
// tomCat1 是用 as Cat 将 any 类型的 getCaCheData('tom') 断言为了 Cat 类型。
// tomCat2 是用类型声明的方式，将 tomCat2 声明为 Cat，再将 any 类型的 getCaCheData('tom') 赋值给 Cat 类型的 tomCat2。
// 这两者是非常相似的，而且产生的结果也是一样的：tom 在接下来的代码中都变为了 Cat 类型。
interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}
const animalCat: Animal = {
  name: 'tom'
}
let tom111 = animalCat as Cat // 不报错
let tom222: Cat = animalCat // error TS2741: Property 'run' is missing in type 'Animal' but required in type 'Cat'.
// 这里不允许将 animalCat 赋值为 Cat 类型的 tom222，是因为，不能把父类的实例赋值给类型为子类的变量。
// 将 animalCat 断言为 Cat 类型，只需要满足任何一个兼容另一个即可。
// 将 animalCat 赋值为 Cat 类型的 tom222，需要满足 Cat 兼容 Animal。
// 因此，类型声明比类型断言更加严格。为了增加代码质量，优先那使用类型声明。

// 7. 类型断言 VS 泛型