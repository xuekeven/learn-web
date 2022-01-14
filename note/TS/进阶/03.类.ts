// 类
// TS 除了实现了所有 ES6 中的类的功能外，还添加了一些新的用法。

// 1. 类的概念
// - 类（Class）：定义一件事物的抽象特点，包含它的属性和方法。
// - 对象（Object）：类的实例，通过 new 生成。
// - 面向对象（OOP）的三大特性：封装、继承、多态。
// - 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要也不可能知道细节
//                        只能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据。
// - 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性。
// - 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。
// - 存取器（getter&setter）：用以改变属性的读取和赋值行为。
// - 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。
// - 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。
//                           抽象类中的抽象方法必须在子类中被实现。
// - 接口（Interfaces）：不同类之间共有的属性或方法，可以抽象成一个接口。接口可以被类实现。
//                     一个类只能继承自另一个类，但是可以实现多个接口。

// 2. ES6 中类的用法

// 3. ES7 中类的用法

// 4. TS 中类的用法
// ① public、private、protected
// TS 可以使用三种访问修饰符，分别是 public、private、protected。
// public 修饰的属性和方法是共有的，可在任何地方被访问到，默认所有的属性和方法都是 public 的。
// private 修饰的属性和方法是私有的，不能在声明它的类的外部访问。
// protected 修饰的属性和方法是受保护的，和 private 类似，区别是它在子类中也是允许被访问的。

// public 修饰的属性和方法是共有的，可在任何地方被访问到，默认所有的属性和方法都是 public 的。
class Animal1 {
  public name
  public constructor(name) {
    this.name = name
  }
}
let ani1 = new Animal1('Jack')
console.log(ani1.name) // Jack
ani1.name = 'Tom'
console.log(ani1.name) // Tom

// private 修饰的属性和方法是私有的，不能在声明它的类的外部访问。
// protected 修饰的属性和方法是受保护的，和 private 类似，区别是它在子类中也是允许被访问的。
// 希望有的属性是无法直接存取的，就可以用 private。需要注意的是，TS 编译之后的 JS 代码中，
// 并没有限制 private 属性在外部的可访问性，即在生成后的 JS 中可访问。
class Animal2 {
  private name
  public constructor(name) {
    this.name = name
  }
}
let ani2 = new Animal2('Jack')
// console.log(ani2.name) // error TS2341: Property 'name' is private and only accessible within class 'Animal'.
// ani2.name = 'Tom' // error TS2341: Property 'name' is private and only accessible within class 'Animal'.
// console.log(ani2.name) // error TS2341: Property 'name' is private and only accessible within class 'Animal'.

// 使用 private 修饰的属性或方法，在子类中也是不允许访问的。
// 使用 protected 修饰的属性或方法，则允许在子类中访问。
class Animal3 {
  private name;
  public constructor(name) {
    this.name = name;
  }
}
class Animal4 {
  protected name;
  public constructor(name) {
    this.name = name;
  }
}
class Cat3 extends Animal3 {
  constructor(name) {
    super(name);
    // console.log(this.name); // error TS2341: Property 'name' is private and only accessible within class 'Animal'.
  }
}
class Cat4 extends Animal4 {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
}

// 当构造函数修饰为 private 时，该类不允许被继承或者实例化。
// 当构造函数修饰为 protected 时，该类只允许被继承。
class Animal5 {
  public name;
  private constructor(name) {
    this.name = name;
  }
}
class Animal6 {
  public name;
  protected constructor(name) {
    this.name = name;
  }
}
// class Cat5 extends Animal5 { // TS2675: Cannot extend a class 'Animal'. Class constructor is marked as private.
//   constructor(name) {
//     super(name);
//   }
// }
class Cat6 extends Animal6 {
  constructor(name) {
    super(name);
  }
}
// let ani5 = new Animal5('Jack'); // TS2673: Constructor of class 'Animal' is private and only accessible within the class declaration.
// let ani6 = new Animal6('Jack') // TS2674: Constructor of class 'Animal' is protected and only accessible within the class declaration.

// ② 参数属性
// 修饰符和 readonly 还可以用在构造函数参数中，等同于类中定义该属性时同时给该属性赋值，使代码更简洁。
class Animal7 {
  // public name: string
  public constructor(public name) {
    // this.name = name
  }
}

// ③ readonly
// 只读属性关键字，只允许出现在属性声明或所有签名或构造函数中。
// 如果 readonly 和其他访问修饰符同时存在的话，需要写在后面。
class Animal8 {
  readonly name
  public constructor(name) {
    this.name = name
  }
}
class Animal9 {
  // public readonly name
  public constructor(public readonly name) {
    // this.name = name
  }
}
let ani8 = new Animal8('Jack')
console.log(ani8.name) // Jack
// ani8.name = 'Tom' // TS2540: Cannot assign to 'name' because it is a read-only property.

// ④ 抽象类
// abstract 用以定义抽象类和其中的抽象方法。
// 首先，抽象类不允许被实例化；其次，抽象类中的抽象方法必须被子类实现。最后是正确使用抽象类的实例。
abstract class Animal10 {
  public name
  public constructor(name) {
    this.name = name
  }
  public abstract sayHi()
}
// let ani10 = new Animal10('Jack') // error TS2511: Cannot create an instance of the abstract class 'Animal'.
// class Cat10 extends Animal10 { // error TS2515: Non-abstract class 'Cat' does not implement inherited abstract member 'sayHi' from class 'Animal'.
//   public Cat() {
//     .console.log(`${this.name} is Eating.`);
//   }
// }
abstract class Animal11 {
  public name
  public constructor(name) {
    this.name = name
  }
  public abstract sayHi()
}
class Cat11 extends Animal11 {
  public sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  }
}
let cat11 = new Cat11('Tom')

// 5. 类的类型
// 给类加上 TS 的类型很简单，与接口类似。
class Animal12 {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayHi(): string {
    return `My name is ${this.name}`
  }
}
let ani12: Animal12 = new Animal12('Jack')
console.log(ani12.sayHi()) // My name is Jack