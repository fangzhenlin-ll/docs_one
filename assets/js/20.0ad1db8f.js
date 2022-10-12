(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{416:function(s,n,e){"use strict";e.r(n);var a=e(2),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[s._v("给定一棵二叉搜索树，请找出其中第 k 大的节点的值。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("输入: root = [3,1,4,null,2], k = 1\n   3\n  / \\\n 1   4\n  \\\n   2\n输出: 4\n输入: root = [5,3,6,2,4,null,null,1], k = 3\n       5\n      / \\\n     3   6\n    / \\\n   2   4\n  /\n 1\n输出: 4\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])])]),s._v(" "),e("h2",{attrs:{id:"刷题中巩固的知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#刷题中巩固的知识"}},[s._v("#")]),s._v(" 刷题中巩固的知识")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("let arr=[1,2,3,4,5,6]\nlet max =Math.max(...arr) //输出 最大值5\nlet min =Math.min(...arr)//输出最小值1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("hr"),s._v(" "),e("h3",{attrs:{id:"什么是二叉树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是二叉树"}},[s._v("#")]),s._v(" 什么是二叉树")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("ol",[e("li",[s._v("先序遍历 "),e("br"),s._v("\n先访问根节点，然后访问左节点，最后访问右节点(根->左->右)")]),s._v(" "),e("li",[s._v("中序遍历"),e("br"),s._v("\n先访问左节点，然后访问根节点，最后访问右节点(左->根->右)")]),s._v(" "),e("li",[s._v("后序遍历"),e("br"),s._v("\n先访问左节点，然后访问右节点，最后访问根节点(左->右->根)")])])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function Node(key) {\n    this.key = key;\n    this.left = null;\n    this.right = null;\n}\n\nfunction BinarySearchTree() {\n    this.root = null;\n}\n// 查询树排序插入\nfunction insertNode(node, newNode) {\n    // 如果新节点值小于当前节点值，则插入左子节点\n    if (newNode.key < node.key) {\n        if (node.left === null) {\n            node.left = newNode;\n        } else {\n            insertNode(node.left, newNode);\n        }\n    } else {\n        // 如果新节点值大于当前节点值，则插入右子节点\n        if (node.right === null) {\n            node.right = newNode;\n        } else {\n            insertNode(node.right, newNode);\n        }\n    }\n}\n// 插入\nBinarySearchTree.prototype.insert = function(key) {\n    let newNode = new Node(key);\n    if (this.root === null) {\n        this.root = newNode;\n    } else {\n        insertNode(this.root, newNode);\n    }\n}\n\nlet tree = new BinarySearchTree()\ntree.insert(19)\ntree.insert(10)\ntree.insert(20)\ntree.insert(23)\ntree.insert(1)\ntree.insert(18)\n    // console.log(tree)\n    // 中序遍历\nfunction inTraverseBTree(treeNode) {\n    if (treeNode !== null) {\n        inTraverseBTree(treeNode.left)\n        console.log(treeNode.key)\n        inTraverseBTree(treeNode.right)\n    }\n}\ninTraverseBTree(tree.root);\n//输出\n// 1\n// 10\n// 18\n// 19\n// 20\n// 2\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br")])]),e("h3",{attrs:{id:"先序遍历"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#先序遍历"}},[s._v("#")]),s._v(" 先序遍历")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 先序遍历\nfunction preTraverseBTree(treeNode) {\n  if(treeNode !== null) {\n    console.log(treeNode.key)\n    preTraverseBTree(treeNode.left)\n    preTraverseBTree(treeNode.right)\n  }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"中序遍历"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#中序遍历"}},[s._v("#")]),s._v(" 中序遍历")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 中序遍历\nfunction inTraverseBTree(treeNode) {\n  if(treeNode !== null) {\n    inTraverseBTree(treeNode.left)\n    console.log(treeNode.key)\n    inTraverseBTree(treeNode.right)\n  }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"后序遍历"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后序遍历"}},[s._v("#")]),s._v(" 后序遍历")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 后序遍历\nfunction afterTraverseBTree(treeNode) {\n  if(treeNode !== null) {\n    afterTraverseBTree(treeNode.left)\n    afterTraverseBTree(treeNode.right)\n    console.log(treeNode.key)\n  }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);