(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{422:function(s,n,e){"use strict";e.r(n);var a=e(2),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[s._v("node 学习的第二天   WEB基础服务器  模块")])]),s._v(" "),e("h2",{attrs:{id:"web-服务器实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-服务器实例"}},[s._v("#")]),s._v(" web 服务器实例")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 1. 导入 http 模块\nconst http = require('http')\n\n// 2. 创建 web 服务器实例\nconst server = http.createServer()\n\n// 3. 为服务器实例绑定 request 事件，监听客户端的请求\nserver.on('request', function (req, res) {\n    const url = req.url     //req.url  是客户端请求的url地址\n    const method = req.method   // req.method 是客户端请求的method类型\n\n    const str = `你的请求地址是${url},请求类型是${method}`\n    res.setHeader('Content-Type', 'text/html; charset=utf-8')    //解决中文乱码的问题\n    res.end(str);   //向客户端发送内容 并结束此次请求\n})\n\n// 4. 启动服务器\nserver.listen(8080, function () {  \n  console.log('server running at http://127.0.0.1:8080')\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("h2",{attrs:{id:"模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[s._v("#")]),s._v(" 模块")]),s._v(" "),e("hr"),s._v(" "),e("h3",{attrs:{id:"模块的引用-内置模块-自定义模块-第三方模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块的引用-内置模块-自定义模块-第三方模块"}},[s._v("#")]),s._v(" 模块的引用 （内置模块 自定义模块  第三方模块）")]),s._v(" "),e("blockquote",[e("p",[s._v("const http =require('http') //内置模块 第三方模块  引用名称 "),e("br"),s._v("\nconst m1 =require('./index.js) //自定义模块  引用路径  会执行里面的所有代码 可以省略.js的后缀名"),e("br")])]),s._v(" "),e("h3",{attrs:{id:"模块作用域-防止全局变量污染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块作用域-防止全局变量污染"}},[s._v("#")]),s._v(" 模块作用域 （防止全局变量污染）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//模块作用域 \n//创建 index.js \nconst username = '张三'\nfunction sayHello() {\n  console.log('大家好，我是' + username)\n}\n\n//创建 index1.js 引用index.js模块 \nconst m1 = require('./index')\nconsole.log(m1)//并不会输出 \"大家好，我是张三\"  而是输出{} \n//在外界使用require导入的自定义模块 得到的就是module.exports所指向的对象\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h3",{attrs:{id:"向外共享模块作用域中的成员-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#向外共享模块作用域中的成员-module"}},[s._v("#")]),s._v(" 向外共享模块作用域中的成员 module")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//什么是module\nModule {\n  id: '.',\n  path: 'D:\\\\学习资料\\\\wode\\\\node\\\\node.js—资料\\\\day2\\\\code',\n  exports: {}, //向外共享成员\n  filename: 'D:\\\\学习资料\\\\wode\\\\node\\\\node.js—资料\\\\day2\\\\code\\\\010.创建基本web服务器.js',\n  loaded: false,\n  children: [],\n  paths: [\n    'D:\\\\学习资料\\\\wode\\\\node\\\\node.js—资料\\\\day2\\\\code\\\\node_modules',\n    'D:\\\\学习资料\\\\wode\\\\node\\\\node.js—资料\\\\day2\\\\node_modules',\n    'D:\\\\学习资料\\\\wode\\\\node\\\\node.js—资料\\\\node_modules',\n    'D:\\\\学习资料\\\\wode\\\\node\\\\node_modules',\n    'D:\\\\学习资料\\\\wode\\\\node_modules',\n    'D:\\\\学习资料\\\\node_modules',\n    'D:\\\\node_modules'\n  ]\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("blockquote",[e("p",[s._v("在自定义模块中，可以使用module.exports对象，将模块中的成员共享出去，供外界使用")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const age = 20\n// 向 module.exports 对象上挂载 username 属性\nmodule.exports.username = 'zs'\n    // 向 module.exports 对象上挂载 sayHello 方法\nmodule.exports.sayHello = function() {\n    console.log('Hello!')\n}\nmodule.exports.age = age\n\n//在外部应用得到 { username: 'zs', sayHello: [Function (anonymous)], age: 20 }\n\n// 让 module.exports 指向一个全新的对象\nmodule.exports = {\n    nickname: '小黑',\n    sayHi() {\n        console.log('Hi!')\n    }\n}\n//重定向后 则得到 { nickname: '小黑', sayHi: [Function: sayHi] }\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("blockquote",[e("p",[s._v("在node中   module.exports  ===  exports  指向同一对象  得到的永远是module.exports所指向的对象")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("exports.username ='zs'\nmodule.exports ={\n  name:'ww',\n  age:'18'\n}\n\nmodule.exports ={\n  name:'ww',\n  age:'18'\n}\nexports.username ='zs'\n//2种情况得到 name:'ww',age:'18' 而不是 username='zs'\nmodule.exports.usname='zs'\nexports ={\n  name:'ww',\n  age:'18'\n}\n//得到的还是  username ='zs'  而不是后面exports定义的！  \n\nmodule.exports.usname='zs'\nexports.gae ='18'\n//得到  username ='zs' 和 age='18'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);