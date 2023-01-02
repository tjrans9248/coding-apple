// //this 는 나를 담고있는 object를 출력한다.
// function 함수() {
//   console.log(this);
// }
// 함수();
// window.함수();

// // obj.data.function();

// constructor

// var a = {};

// function machine() {
//   this.name = 'kim';
// }

// var obj = new machine();
// // console.log(obj);

// document.getElementById('button').addEventListener('click', function (e) {
//   var arr = [1, 2, 3];
//   arr.forEach(function (a) {
//     console.log(this);
//   });
// });

// var obj = {
//   name: ['kim', 'lee', 'park'],
//   foo: function () {
//     obj.name.forEach(() => {
//       console.log(this);
//     });
//   },
// };

// obj.foo();

// var info = {
//   data: [1, 2, 3, 4, 5],
//   sum: function () {
//     info.data.forEach(item => {
//       let sumsum = 0;
//       sumsum += item;
//     });
//   },
// };
// info.sum();

// var info = {
//   data: [1, 2, 3, 4, 5],
//   sum: function () {
//     info.data.reduce((a, b) => a + b);
//   },
// };
// console.log(info.sum());

// var info = {
//   data: [1, 2, 3, 4, 5],
// };

// info.add = function () {
//   var result = 0;
//   this.data.forEach(function (a) {
//     result += a;
//   });
//   console.log(result);
// };
// info.add();

// document.getElementById('button').addEventListener('click', function () {
//   setTimeout(() => {
//     console.log(this.innerHTML);
//   }, 1000);
// });

// if (true) {
//   let a = 1;
//   var b = 2;
//   if (true) {
//     let b = 3; // 중광호 안에서만 사용가능
//   }
//   console.log(b);
// }

// const buttons = document.querySelectorAll('button');
// const modals = document.querySelectorAll('div');

// for (var i = 0; i < 3; i++) {
//   buttons[i].addEventListener('click', function () {
//     modals[i].style.display = 'block';
//   });
// }

// Template literal 문자열을 다르게 만들수 있는 방법

// var string = `손흥민`;
// var sentence = `안녕하세요 저는 ${string}`;

// function a() {
//   return 10;
// }

// function foo(a, b) {
//   console.log(a[1] + a[0]);
//   console.log(b);
// }

// foo`안녕하세요 ${string} 입니다`;

// var pants = 0;
// var socks = 100;

// function stock(a, b) {
//   // console.log(a[1] + pants + a[0] + socks);
//   if (pants === 0) {
//     console.log('바지가 다 팔렸어요', a[1] + socks);
//   }
// }

// stock`바지${pants} 양말${socks}`;

// spread operator

// let str = 'hello';
// console.log(...str);

// var a = [1, 2, 3];
// var b = [4, 5];

// var c = [...a];

// console.log(a);

// var person = {
//   hello: function () {
//     console.log('world');
//   },
// };

// var person2 = {
//   name: '손흥민',
// };

// person.hello.apply(person2, [1, 2]); // person 에 있는 hello를 person2에서도 실행시키고 싶다, apply는 파라미터를 array형태로 집어넣기 가능
// person.hello.call(person2, 1, 2); //

// 객체지향 상속

// var student = {
//   name: 'kim',
//   age: 15,
//   sayHi: function () {
//     console.log('안녀하세요' + this.name + '입니다');
//   },
// };

// student.sayHi();

// function School(name) {
//   this.name = name;
//   this.age = 15;
//   this.sayHi = function () {
//     console.log('안녀하세요' + this.name + '입니다');
//   };
// }

// var student1 = new School('park');

// function Product(name, price) {
//   (this.name = name), (this.price = price);
//   this.discount = function () {
//     console.log(this.price * 0.1);
//   };
// }

// var product1 = new Product('shirts', 50000);
// var product2 = new Product('pants', 60000);

// Prototype === 유전자
// constructor 를 만들면 prototype 이라는 공간이 자동으로 생성된다

// function School(name) {
//   this.name = name;
//   this.age = 15;
//   this.sayHi = function () {
//     console.log('안녀하세요' + this.name + '입니다');
//   };
// }

// School.prototype.gender = 'male';

// var student1 = new School('park');
// var student2 = new School('yang');

// var obj = { name: 'kim' };
// var obj2 = {};

// obj2.__proto__ = obj;
// obj.name;

// function School(name, age) {
//   this.name = name;
//   this.age = age;
// }

// School.prototype.sayHi = () => {
//   console.log('안녕 나는' + this.name + '이야');
// };

// var student1 = new School('kim', 20);
// var student2 = new School('park', 21);
// var student3 = new School('lee', 22);

// student1.prototype.sayHi();

// Array.prototype.remove = function () {
//   for (var i = 0; i < this.length; i++) {
//     if (this[i] === 3) {
//       this.splice(i, 1);
//     }
//   }
// };

// var arr = [1, 2, 3, 4];
// arr.remove();

// Object.create()

// var parents = { name: 'kim', age: 50 };
// var child = Object.create(parents);

// class

// class Parents {
//   constructor() {
//     this.name = 'yang';
//     this.sayHi = function () {
//       console.log('hello');
//     };
//     // sayHi(){
//     //   console.log('hello') // Parents.prototype에 추가됨
//     // }
//   }
// }

// let child = new Parents();
// Object.getPrototypeOf(child);

// 유사한 class 를 하나더 만들고 싶으면 (extends)

// class Grandfa {
//   constructor(name) {
//     (this.lastName = 'kim'), (this.firstName = name);
//   }
//   sayHi() {
//     console.log('할아버지');
//   }
// }

// // var grandfa1 = new Grandfa('sean');

// class Father extends Grandfa {
//   constructor(name) {
//     super(name);
//     this.age = 50;
//   }
//   sayHi() {
//     console.log('아버지');
//     super.sayHi();
//   }
// }

// var father1 = new Father('sean');

//getter, setter
// var person = {
//   name: 'park',
//   age: 30,
//   get nextAge() {
//     // get은 데이터 꺼내쓰는 함수에
//     // get 함수들은 return 이 있어야 합니다.
//     return this.age + 1;
//   },
//   set setAge(age) {
//     // set은 데이터 변경하는 함수에
//     // 파라미터가 1개 있어야 합니다.
//     this.age = parseInt(age);
//   },
// };

// person.setAge = '30';

// class Person {
//   constructor() {
//     this.name = 'sean';
//     this.age = 20;
//   }
//   get getAge() {
//     return this.age + 1;
//   }
//   set setAge(age) {
//     this.age = age;
//   }
// }

// var obj = new Person();

// class, extends, getter, setter 연습문제

// class Poppy {
//   constructor(type, color) {
//     this.type = type;
//     this.color = color;
//   }
// }

// // var dog1 = new Poppy('말티즈', 'white');
// // var dog2 = new Poppy('진돗개', 'brown');

// class Cats extends Poppy {
//   constructor(type, color, age) {
//     super(type, color);
//     this.age = age;
//   }
//   getAge() {
//     return this.age + 1;
//   }
// }

// var cat1 = new Cats('코숏', 'white', 5);

// class Unit {
//   constructor(){
//     this.atk = 5
//     this.life = 100
//   }
//   battlePoint(){
//     return this.atk + this.life
//   }
//   heal(life){
//     this.life = this.life + life
//   }
// }

var data = {
  odd: [],
  even: [],
  setOdd: function (...numbers) {
    numbers.forEach(a => {
      if (a % 2 === 1) {
        this.odd.push(a);
      } else {
        this.even.push(a);
      }
    });
  },
};

var data1 = {
  odd: [1, 3],
  even: [2, 4, 6],
  get sorting() {
    return [...this.odd, ...this.even].sort();
  },
};

console.log(data1.sorting);
