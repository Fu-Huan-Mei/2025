//1、变量类型声明：声明1个变量并同时指定其类型为number
let n:number;
//a的类型为number，在以后使用过程中a的值只能是数字
n = 10;
//此行代码会报错，因为变量a的类型是number，不能赋值为字符串
// a = 'string';
//声明变量直接进行赋值
let c:boolean = false;
//如果变量声明和赋值同时进行，则ts可自动对变量进行类型检查
c = true;
//2、函数参数类型声明：js中函数是不考虑参数的类型和个数
//function fn(参数：类型，参数：类型)：类型{ }
function sum(a:number,b:number):number{
    //3、函数返回值类型声明：
    return a+b
}
console.log(sum(123,456));
//4、可直接使用字面量进行类型声明
let num:number;
num = 20;
num = 30;
//5、可使用|连接多个类型（联合类型）
let b:'male' | 'female';
//6、声明变量如果不指定类型，则TS解析器会自动判断变量类型为any（隐式any）
let e:any;
e = 10;
//7、unknown：未知类型的值
let val:unknown;
//unknown类型的变量不能直接赋值给其它变量
if(typeof val === 'string'){
    val = 200;
}
//8、类型断言：用来告诉解析器变量的实际类型
val = num as number;
//9、语法：变量 as 类型、<类型>变量
//10、void：表示空，以函数为例，表示没有返回值的函数
function fn():void{

}
//11、never：表示永远不会返回结果 eg：
function fn2():never{
    throw new Error('报错了')
}
//12、object表示1个js对象
let obj:object;
obj = {};
obj = function(){};
//13、语法：{属性名?：属性值}用来指定对象{}中可包含哪些属性
//属性名加上？，表示属性可选
let obj2:{name:string,age:number};
obj2 = {name:'孙悟空',age:18};
//[propName:string]:any 表示任意类型的属性
let obj3:{name:string,[propName:string]:any}
//设置函数结构的类型声明：语法：（形参：类型，形参：类型）=>返回值
//string[]表示数组中的元素必须是字符串
let arr:string[];
arr = ['a','b','c'];
//number[]数值数组
//Array<number>数值数组
//元组：固定长度的数组:[类型，类型，类型]
let h:[string,string];
h = ['helo','world'];
//enum枚举
enum Gender {
    Male=0,
    Female=1
}
let i:{name:string,gender:Gender}
i = {
    name:'孙悟空',
    gender:Gender.Male
}
//&表示同时
let j:{name:string} & {age:number};
j = {
    name:'孙悟空',
    age:18
}
//类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k:myType;
let l:myType;