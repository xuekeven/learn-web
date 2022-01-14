// 类与接口
// 接口可以用于对「对象的形状」进行描述。这里主要介绍接口的另一个用途：对类的一部分进行抽象。

// 1. 类实现接口
// 实现是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类。
// 有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口，
// 用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。一个类可以实现多个接口。
interface Alarm1 {
  alert(): void
}
interface Light1 {
  lightOn(): void
  lightOff(): void
}
class Door1 {
}
class SecurityDoor1 extends Door1 implements Alarm1 {
  alert() {
    console.log('SecurityDoor alert')
  }
}
class Car1 implements Alarm1, Light1 {
  alert() {
    console.log('Car alert')
  }
  lightOn() {
    console.log('Car light on')
  }
  lightOff(): void {
    console.log('Car light off')
  }
}

// 2. 接口继承接口
// 接口与接口之间可以是继承关系。继承者除有自己的属性和方法，还有被继承者的属性和方法。
interface Alarm2 {
  alert(): void
}
interface LightableAlarm extends Alarm2 {
  lightOn(): void
  lightOff(): void
}

// 3. 接口继承类
// 常见的面向对象语言中，接口都不能继承类的，但在 TS 中可以。
class Point1 {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
interface Point3d1 extends Point1 {
  z: number
}
let point3d1: Point3d1 = { x: 1, y: 2, z: 3 }

// TS 支持接口继承类是因为，我们在使用 class 来声明一个类时，
// 除了会创建对应名字的类，也会创建对应名字的类型（同名的类型）。
// 「接口继承类」和「接口继承接口」没有什么本质的区别。
// 在下面例子中，既可以将 Point2 当做类来用，也可以将 Point2 当做一个类型来用。
class Point2 {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
const p2 = new Point2(1, 2)         // 当类来使用
function printPoint2(p: Point2) {  // 当类型来使用
  console.log(p.x, p.y)            // 当类型来使用
}                                  // 当类型来使用
printPoint2(new Point2(1, 2))      // 当类型来使用

// 实际上，上方等价于下方。PointInstanceType3 类型和声明 class 时创建的 Point3 类型是等价的。 
// 值得注意的是，PointInstanceType3 类型和 Point3 类相比，缺少了 constructor 方法，
// 这是因为声明 class 时创建的 Point3 类型是不包含构造函数的，除了构造函数，也不包含静态属性和静态方法。
// 但同时，实例的类型当然也不应该包含构造函数、静态属性、静态方法。
// 换句话说，声明 class 时创建的 Point3 类型只包含 Point3 类中的实例属性和实例方法。
// 同样的，在接口继承类的时候，也只会继承类的实例属性和实例方法。
class Point3 {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
interface PointInstanceType3 {
  x: number
  y: number
}
function printPoint(p: PointInstanceType3) {
  console.log(p.x, p.y)
}
printPoint(new Point3(1, 2))

// 下面例子中，最后的 p41 和 p42 中的 Point4 类型和 PointInstanceType4 类型是等价的。
class Point4 {
  /** 静态属性，坐标系原点 */
  static origin = new Point4(0, 0)
  /** 静态方法，计算与原点距离 */
  static distanceToOrigin(p: Point4) {
    return Math.sqrt(p.x * p.x + p.y * p.y)
  }
  /** 实例属性，x 轴的值 */
  x: number;
  /** 实例属性，y 轴的值 */
  y: number;
  /** 构造函数 */
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  /** 实例方法，打印此点 */
  printPoint() {
    console.log(this.x, this.y)
  }
}
interface PointInstanceType4 {
  x: number
  y: number
  printPoint(): void
}
let p41: Point4
let p42: PointInstanceType4