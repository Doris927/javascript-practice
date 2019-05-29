/**
 * 3. 基本概念
 * 3.1 语法
 * 3.2 关键字和保留字
 * 3.3 变量
 * 3.4 数据类型
 * 3.5 操作符
 * 3.6 语句
 * 3.7 函数
 */

 /**
  * 3.4.1 typeof
  * "undefined"—— 如果 这个 值 未定义； 
  * "boolean"—— 如果 这个 值 是 布尔 值；
  * "string"—— 如果 这个 值 是 字符串；
  * "number"—— 如果 这个 值 是 数值；
  * "object"—— 如果 这个 值 是 对象 或 null； 
  * "function"—— 如果 这个 值 是 函数。
  */
 {
     console.log("typeof: null",typeof null);
     let message;
     console.log("typeof: undefined", typeof message);
 }

 /**
  * 3.4.2 undefined
  * 
  */
 {
     let message;
     console.log(message===undefined); //变量声明后没有赋值，则为undefined
     console.log(typeof age ); //对于尚未声明的变量，只能执行typeof操作，其他操作会报错
     //console.log(age); //对于尚未声明的变量，只能执行typeof操作，其他操作会报错
 }


 /**
  * 3.4.3 Null类型
  */
 {
   let car = null;
   console.log("null", typeof car); // object
   console.log(null == undefined); // true
   console.log(null === undefined); //false
 }

/**
 * 3.4.4 Boolean类型
*/
{
  let message = "hello world";
  console.log(Boolean(message)); //非空字符串返回true
  console.log(Boolean(null));  //除了null的Object都返回true
}

/**
 * 3.4.5 Number类型
 */
{
  let number = 070;//八进制
  console.log('八进制:', number);
}