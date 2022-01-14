// 类型别名
// 类型别名用来给一个类型起个新名字，之后只要使用这个类型的地方，都可以使用这个名字作为类型代替。
// 类型别名只是起了个名字，并不是新创建了一个新类型。使用 type 关键字来定义类型别名。类型别名常用于联合类型。
type Name = string
type Resolver = () => string
type NameOrResolver = Name | Resolver
let str: Name = 'hello'
// str = 123 // error TS2322: Type 'number' is not assignable to type 'string'.
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') return n
  else return n()
}

// 字符串字面量类型
// 字符串字面量类型用来约束取值只能是某几个字符串中的一个。类型别名和字符串字面量类型都是使用 type 来进行定义。
type EventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele: Element, event: EventNames) {
  // do something
}
const hello = document.getElementById('hello')
const world = document.getElementById('world')
handleEvent(hello, 'scroll')
// handleEvent(world, 'dbclick') // error TS2345: Argument of type '"dblclick"' is not assignable to parameter of type 'EventNames'.
