/*
 * @Author: laifeipeng 
 * @Date: 2019-02-27 09:55:48 
 * @Last Modified by: laifeipeng
 * @Last Modified time: 2019-02-27 12:48:06
 */

// 函数的声明比变量的声明的优先级要高
function test1() {
  console.log(a);                 //打印出a的函数体
  function a() { }
  var a;
  console.log(a);                 //打印出a的函数体

  console.log(b);                 //打印出b的函数体
  var b;
  function b() { }
  console.log(b);                 //打印出b的函数体

  // ！注意看，一旦变量被赋值后，将会输出变量
  console.log(c);                 //打印出c的函数体
  var c = 12
  function c() { }
  console.log(c);                 //12

  console.log(d);                 //打印出d的函数体
  function d() { }
  var d = 12
  console.log(d);                //12
}
test1();

console.log('----------分割线---------')

function test2() {
  console.log(a);                 //undefined
  var a = function a() { }
  var a;
  console.log(a);                //打印出a的函数体

  console.log(b);                 //undefined
  var b;
  var b = function b() { }
  console.log(b);                 //打印出b的函数体 

  // ！注意看，一旦变量被赋值后，将会输出变量
  console.log(c);                 //undefined
  var c = 12
  var c = function c() { }
  console.log(c);                 //打印出c的函数体 

  console.log(d);
  var d = function d() { }
  var d = 12
  console.log(d);                //12
}
test2();
