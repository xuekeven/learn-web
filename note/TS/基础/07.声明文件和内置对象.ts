// 声明文件
// 使用第三方库时，需要引用它的声明文件，才能获得对应功能。

// 1. 声明语句
// 若想使用第三方库 jQuery，在 HTML 中通过 <script> 引入后，就可以使用全局变量 $ 或 jQuery。
// 但在 TS 中，编译器并不知道 $ 和 jQuery 是什么东西，这时，我们需要来定义它的类型。如下面例子。
// declare var 并没有真的定义一个变量，
// 只是定义了全局变量 jQuery 的类型，仅仅用于编译时的检查，结果中会被删除。
declare var jQuery: (selector: string) => any

// 2. 声明文件
// 通常我们把声明语句放到单独的文件中，这就是声明文件，声明文件必须以 .d.ts 为后缀。
// 一般来说，TS 会解析项目中所有的 *.ts 文件，也包括 .d.ts 文件。
// 当把声明文件放到项目中时，其他所有的 *.ts 文件就都可以获得对应的类型定义了。
// 一些成熟的声明文件不需要我们定义，社区已经定义好了，可以直接下载下来使用。
// 但更推荐使用 @types 统一管理第三方库的声明文件，直接用 npm 安装对于的声明模块即可。

// 3. 书写声明文件

// 4. 发布声明文件

// 内置对象
// JS 中有很多内置对象，它们可以直接在 TS 中当做定义好了的类型。
// 内置对象是指根据标准在全局作用域上存在的对象。这里的标准指 ES 和其他环境（如 DOM）的标准。

// 1. ES 的内置对象
// ES 标准提供的内置对象有 Boolean、Error、Date、RegExp 等。
// 我们可以在 TS 中将变量定义为这些类型。而它们的定义文件则在   TS 核心库的定义文件   中。
let b: Boolean = new Boolean(1)
let e: Error = new Error('Error occured')
let d: Date = new Date()
let r: RegExp = /[a-z]/

// 2. DOM 和 BOM 的内置对象
// DOM 和 BOM 提供的内置对象有 Document、HTMLElement、Event、NodeList 等。
// 同理，TS 中经常会用到这些类型。它们的定义文件同样在   TS 核心库的定义文件   中。
let body: HTMLElement = document.body
let addDiv: NodeList = document.querySelectorAll('div')

// 3. TS 核心库的定义文件
// TS 核心库的定义文件中定义了所有浏览器环境需要用到的类型，并且是预置在 TS 中的。
// 在使用一些常用的方法的时候，TS 实际上已经帮你做了很多类型判断的工作了。
// 但是注意，TS 核心库的定义中不包含 Node.js 部分。

// 4. 用 TS 写 Node.js
// Node.js 不是内置对象的一部分，如果想用 TS 写 Node.js，则需要引入第三方声明文件：
// npm install @types/node --save-dev
