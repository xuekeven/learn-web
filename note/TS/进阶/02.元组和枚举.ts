// 元组
// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。

// 1. 简单的例子
// 直接对元组类型的变量进行初始化或赋值时，需要提供所有元组类型中指定的项。
// 当赋值或访问一个已知索引的元素时，会得到正确的类型。也可以只赋值其中一项。
let tomTuple1: [string, number] = ['Tom', 25]
let tomTuple2: [string, number]
tomTuple2[0] = 'Tom'
tomTuple2[1] = 25
tomTuple2[0].slice(1)
tomTuple2[1].toFixed(2)

// 2. 越界的元素
// 添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型。
tomTuple2.push('555')
// tomTuple2.push(true) // Argument of type 'true' is not assignable to parameter of type 'string | number'.

// 枚举
// 枚举（Enum）用于取值被限定在一定范围内的场景。如，一周只能有七天。

// 1. 简单的例子
// 枚举使用 enum 关键字来定义。
// 枚举成员会被赋值为从 0 开始递增的数字，同时，也会对枚举值到枚举名进行反向映射。
enum Days1 { Sun, Mon, Tue, Wed, Thu, Fir, Sat }
Days1["Sun"] === 0   // true
Days1["Mon"] === 1   // true
Days1["Sat"] === 6   // true
Days1[0] === "Sun"   // true
Days1[1] === "Mon"   // true
Days1[6] === "Sat"   // true

// 2. 手动赋值
// 也可以给枚举项手动赋值，同时，未被手动赋值的枚举项会接着上一个枚举项递增。
enum Days2 { Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat }
Days2["Sun"] === 7   // true
Days2["Mon"] === 1   // true
Days2["Tue"] === 2   // true
Days2["Sat"] === 6   // true
// 若未被手动赋值的枚举项与手动赋值的枚举项重复了，TS 不会察觉到这一点。
// 后赋值的将覆盖之前的赋值，因此，最好不要出现这种覆盖的情况。
enum Days3 { Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat }
Days3["Sun"] === 3   // true
Days3["Wed"] === 3   // true
Days3[3] === "Wed"   // false
Days3[3] === "Sun"   // true
// 被手动赋值的枚举项可以不是数字，这时需要用类型断言来让 TS 无视类型检查。
// 不能使用类型声明或另一种类型断言方式，因为枚举成员名称的后面必须跟有 ","、"=" 或 "}"。
// 被手动赋值的枚举项也可以为小数或者负数，后续未被手动赋值的递增步长也为 1。
enum Days4 { Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S" }
enum Days5 { Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat }
Days5["Sun"] === 7     // true
Days5["Mon"] === 1.5   // true
Days5["Tue"] === 2.5   // true

// 3. 常数项和计算所得项
// 枚举项有两种类型：常数项和计算所得项。前面内容的枚举项都是常数项。
// 下面为计算所得项的例子，不会报错，但是，
// 如果紧接在计算所得项后面的是未手动赋值的项，那么它会因为无法获得初始值而报错。
enum Color1 { Red, Green, Blue = "Blue".length }
// enum Color2 { Red = "red".length, Green, Blue } // error TS1061: Enum member must have initializer.

// 4. 常数枚举
// 常数枚举是使用 const enum 定义的枚举类型。
// 常数枚举与普通枚举的区别是，常数枚举会在编译阶段被删除，并且不能包含计算成员。
const enum Directions1 { Up, Down, Left, Right }
let directions1 = [Directions1.Up, Directions1.Down, Directions1.Left, Directions1.Right]

// 5. 外部枚举
// 外部枚举是使用 declare enum 定义的枚举类型。
// declare 定义的类型只会用于编译时的检查，编译结果中会被删除。
// 外部枚举和声明语句一样，常出现在声明文件中。同时使用 declare 和 const 也是可以的。
declare enum Directions2 { Up, Down, Left, Right }
declare const enum Directions3 { Up, Down, Left, Right }
let directions2 = [Directions2.Up, Directions2.Down, Directions2.Left, Directions2.Right]
let directions3 = [Directions2.Up, Directions2.Down, Directions2.Left, Directions2.Right]
