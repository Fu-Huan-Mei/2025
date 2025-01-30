/*使用class关键字定义类*/
class Person {
    //1、属性
    //（1）实例属性：通过对象的实例去访问
    name:string = '孙悟空';
    gender:string;//声明
    //readonly只读属性
    // readonly name:string = '孙悟空';
    //（2）（类属性）静态属性：通过类型去访问
    static age:number = 10;
    //2、方法
    //（1）实例方法
    sayHello(){
        console.log("hello 大家好")
    }
    //（2）静态方法
    static talkAbout(){
        console.log("hello talk!")
    }
    //3、构造函数：会在实例创建时调用
    constructor(gender:string){
        //在构造函数中，this执行当前新建的实例对象
        //赋值
        this.gender = gender
    }
}
const per = new Person('男')
console.log(per.name);
console.log(Person.age);
per.sayHello();

/*继承*/

/*抽象类：以abstract开头：专门用来继承，不可用来创建实例对象*/
//1、抽象方法：使用abstract开头，没有方法体,只能定义在抽象类中，子类必须对抽象方法进行重写
abstract class Animal{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract sayHello():void;
}
class Dog extends Animal {
    sayHello(){

    }
}