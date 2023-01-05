// // 타입스크립트 기본 타입 정리
// let name1: string = 'kim';
// let age: number = 50;
// let getMarried: boolean = true;
// let members: string[] = ['lim', 'park'];
// let member: { member1: string; member2: string } = {
//   member1: 'kim',
//   member2: 'park',
// };
// let person = 'park';
// let project: { member: string[]; days: number; started: boolean } = {
//   member: ['kim', 'park'],
//   days: 30,
//   started: true,
// };
// // 타입을 미리 정하기 애매할 떄
// let 회원: number | string = 123; //union type
// let members12: (number | string)[] = [1, '2', 3];
// let obj: { a: string | number } = { a: 123 };
// let name2: any;
// let name3: unknown;
// // 계산도 엄격하게 적용한다
// let age2: number = 1;
// let user: string = 'kim';
// let age4: undefined = undefined;
// let married: boolean = false;
// let 철수: (string | number | undefined | boolean)[] = [user, age4, married];
// let school: {
//   score: (number | boolean)[];
//   teacher: string;
//   friend: string | string[];
// } = {
//   score: [100, 97, 84],
//   teacher: 'phil',
//   friend: 'john',
// };
// school.score[4] = false;
// school.friend = ['lee', school.teacher];
// 함수 타입 지정하는 법 & void 타입
// function cal(x: number | string) {
//   if (typeof x === 'string') {
//     return x * 2;
//   } else {
//   }
// }
// console.log(cal(5));
// const nothing = (x?: number): void => {
//   1 + 1;
// };
// nothing();
// 숙제 1
// function sayHi(name?: string) {
//   if (name === String(name)) {
//     console.log('안녕하세요' + name);
//   } else {
//     console.log('이름이 없습니다.');
//   }
// }
// sayHi('홍길동');
// 숙제 2
// function countNumber(x: string | number): number {
//   return x.toString().length;
// }
// countNumber('234');
// 숙제 3
// function isMarried(
//   money: number,
//   house: boolean,
//   charm: string
// ): string | void {
//   let totalScore: number = 0;
//   totalScore += money;
//   if (money > 10000) {
//     totalScore += 1;
//   }
//   if (house === true) {
//     totalScore += 500;
//   }
//   if (charm === '상') {
//     totalScore += 100;
//   }
//   if (totalScore >= 600) {
//     return '결혼가능';
//   }
// }
// console.log(isMarried(700, false, '중'));
//
// function nothing() {}
// function foo(x: number | string): void {
//   if(x === ){
//     console.log(x + 3);
//   }
// }
// 타입 정하기 narrowing & Assertion
// function a(x: number | string) {
//   let arr: number[] = [];
//   arr[0] = x as number; // 타입이 number or string 으로 애매하니 확실하게 해주자
// }
// assertion 문법의 용도
// 1. narrowing 할 때 습니다 - narrowing 은 타입이 애매할때 애매한 타입을 확실하게 결정짓는 방법
// 2. 무슨 타입이 들어올지 100% 확실할 때
// 하지만 if(typeof x === 'number){} 가 훨씬 좋다 왜냐 버그추적을 못한다.
//
// function nothing() {}
// function foo(x: number | string): void {
//   if(x === ){
//     console.log(x + 3);
//   }
// }
// 타입 정하기 narrowing & Assertion
// function a(x) {
//     var arr = [];
//     arr[0] = x; // 타입이 number or string 으로 애매하니 확실하게 해주자
// }
// assertion 문법의 용도
// 1. narrowing 할 때 습니다 - narrowing 은 타입이 애매할때 애매한 타입을 확실하게 결정짓는 방법
// 2. 무슨 타입이 들어올지 100% 확실할 때
// 하지만 if(typeof x === 'number){} 가 훨씬 좋다 왜냐 버그추적을 못한다.
// 숙제 1
// function changeNumber(x: (string | number)[]) {
//   let arr: number[] = [];
//   x.forEach(item => {
//     if (typeof item === 'string') {
//       arr.push(parseInt(item));
//     } else {
//       arr.push(item);
//     }
//   });
//   return arr;
// }
// console.log(changeNumber([123, '3']));
// 숙제 2
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
var obj = { color: 'red', width: 100 };
var student = { name: 'sean' };
var teacher = { name: 'yang', age: 45 };
var newObj = {
    plus: function (x, y) {
        return x + y;
    },
    minus: function (a, b) {
        return a - b;
    },
};
