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
 * 》进行计算时八进制和十六进制都会被转化为10进制
 * 》JS中有正零和负0，他们相等
 */
{
  let number = 070;//八进制
  let numberError = 079; //无效的八进制解析为10进制
  console.log('八进制:', numberError); //79
  let number2 = 0xA;//十六进制字母可以大写也可以小写
  console.log('十六进制',number2);//10 
  console.log((+0)===(-0)); //true

  /**
   * (1)浮点数
   */
  //浮点数值，小数点前没有数字也是有效的，但是不推荐这种写法
  let floatNum1 = 1.1;
  //由于保存浮点数字需要的空间是整数的两倍，所以·ES会自动将浮点数转成整数
  let floatNum2 = 10.0;
  console.log('浮点数',floatNum2);//10
  //使用e来表示数字
  let floatNum3 = 10.1e5;
  console.log('浮点数', floatNum3);
  let floatNum4 =3e-17;//小数点后面带6个0以上的数字会被转成e的写法
  console.log('浮点数', floatNum4);
  //浮点数计算精度不如整数
  if(0.1+0.2===0.3){
      console.log('精确计算');
  }else{
      console.log('不精确计算');
  }

  /**
   * (2) 数值范围
   * 如果超过最大值，就会被转化为正无穷，
   * 如果超过最小值，就会被转化为负无穷
   * 可以用isFinite判断
   */
  console.log('max value', Number.MAX_VALUE);
  console.log('min value', Number.MIN_VALUE);
  let testMax = Number.MAX_VALUE + Number.MAX_VALUE;
  console.log('infite', isFinite(testMax)); 

  /**
   * (3) NaN Not a number
   * 用于表示本来应该返回数值的操作数没有返回数值的情况
   * 有两个特性，任何涉及NaN的运算都会返回NaN，NaN与任何值都不相等
   * isNaN 也适用于对象，会调用对象的valueOf，再调用toString
   */
  console.log(NaN===NaN); //false
  console.log('isNaN', isNaN(NaN)); //true

  /***
   * (4) 数值转换
   * Number(), 可以用于任何数据类型，如果是null返回0， 如果是undefined返回NaN，
   * 如果是字符串，只包含数字省略前面的0， 保护16进制转成10进制，空字符串转成0， 包含其他字符转成NaN
   * 如果是对象，则先调用valueOf, 再调用toString
   * parseInt(), 更常用，如果字符串中的第一个非空字符不是数字和符合，则返回NaN，如果是数字则解析到不是数字为止
   * parseFloat() 第二个小数点后无效，始终忽略前导的0
   */
  console.log('parseInt', parseInt('123b')); //123
  console.log('parseInt', parseInt('22.2')); //22
  console.log('parseInt', parseInt('070',8)); //不能识别八进制
  console.log('parseInt', parseInt('0x70')); //可以识别十六进制
  console.log('parseInt', parseInt('070',8)); //可以手动设置进制 2 8 10 16
}

/**
 * 3.4.6 String
 * 既可以用单引号，也可以用双引号
 * 》字符字面量， 转义字符
 * length属性返回字符串中16位字符的数量，所以可能不能精准地表示出字符的长度
 */
{
  /**
   * (2) 字符串的特点
   * 字符串是不可变的，字符串再赋值时是创建了一个新的字符串
   */

  /**
   * (3) 转化为字符串
   * toString()方法 null 和 undefined没有这个方法
   * String() 可以将任何类型转化成字符串
   */
  let num = 10;
  console.log('toString, 可以指定进制', num.toString(2)); //可以指定进制 2 8 10 16
}

/**
 * 3.4.7 Object类型
 * 每个实例都有
 * Construtor， 
 * hasOwnProperty， 
 * isProtoTypeOf
 * propertyIsEnumerable
 * toLocalString
 * toString
 * valueOf
 */
{
  let o = new Object(); 
}

/**
 * 3.5.1 一元操作符
 */
{
  /**
   * (1) 递增和递减操作符
   * 有前置和后置
   */
  let str = "2";
  console.log('自增应用于字符串，包含数字，', ++str); //3
  let str2 = 'z';
  console.log('自增应用于字符串，不包含有效数字，', ++str2);//NaN
  let bool = true;
  console.log('自增应用于布尔类型，', ++bool);//2
  var o = {
    valueOf: function(){
      return -1;
    }
  }
  console.log('自增应用于对象类型', ++o); //0 先调用valueOf，如果为NaN，则再调用toString

  /**
   * (2) 一元加和减操作符
   */
  let num = 25;
  console.log('一元加对数字没有任何影响', +num);
  let str3 = "01";
  console.log('一元加对非数字', ++str3); //会Number()转化
}

/**
 * 3.5.2 位操作符
 * 整数中前31位表示整数的值，第32位表示符号,0代表正数，1代表负数
 * 负数前31位为补码
 * 对非数值进行位运算时，会先使用Number将函数转成一个数值
 */
{
  /**
   * (1) 按位非
   */
　const num = 25;
  console.log('Not ~:', ~num);

  /**
   * (2) 按位与
   */
  /**
   * (3) 按位或
   */
   /**
   * (4) 按位异或
   */
   /**
   * (5) 左移
   */
   /**
   * (6) 有符号右移 >>
   */
  /**
   * (7) 无符号右移 >>> 由0来填充
   */
  const oldValue = -64;
  console.log('无符号右移负数，', oldValue>>>5);
}

/**
 * 3.5.3 布尔操作符
 */
{
  /**
   * (1) 逻辑非
   */
  const o = new Object();
  console.log(!o); //false
  const str = '';
  console.log(!str); //true
  const str2 = 'test';
  console.log(!str2); //false
  const num = 0;
  console.log(!num); //true
  console.log(!Infinity); //false
  console.log(!null); //true
  console.log(!NaN); //true
  console.log(!undefined);//true

  /**
   * (2) 逻辑与
   * 规则
   * 如果第一个操作数是对象，则返回第二个操作数
   * 如果一个操作符是null，则为null
   * 如果一个操作符是undefined，则为undefined
   * 如果一个操作符是NaN，则返回NaN
   */
  console.log(o && 3);//3 如果第一个操作数是对象，则返回第二个操作数
  const found = false;
  const result = (found && undefinedValue); //会短路
  console.log(result);
}