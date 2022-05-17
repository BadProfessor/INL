/*
Block comment
*/

// // Linking a JS file
// alert('Hello World!');

// let js = 'amazing';

// if (js === 'amazing') alert('JavaScript is fun!');

// js = 'boring';
// if (js === 'amazing') alert('JavaScr ipt is fun!');
// let math = 40 + 8 + 23 - 10;
// // Values and variables
// console.log('Jonas');
// console.log(23);

// let firstName = 'Matilda';

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// // Variable name conventions
// let jonas_matilda = 'JM';
// let $function = 27;

// let person = 'jonas';
// const PI = 3.1415;

// let myFirstJob = 'Code';
// let myCurrentJob = 'Teacher';

// let job1 = 'programmer';
// let job2 = 'teacher';

// console.log(myFirstJob);
// // Data Types
// let javaScriptisFun = true;
// console.log(javaScriptisFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// javaScriptisFun = 'YES!';
// console.log(typeof javaScriptisFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);
// let, const and var
// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthyear = 1990;
// // const job;

// var job = 'programmer';
// job = 'teacher';

// lastName = 'Schmedtmann';
// console.log(lastName);
// Basic Operators
// Math Operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah);
// // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 - 2018);
// Operator Precedence
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// Coding Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// String and Template Literals
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ', a' + (year - birthYear) + 'year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String with
// multiple
// lines`);

// Taking Decisions: if / else Statements
// const age = 15;

// if (age >= 18) {
//   console.log(`Sarah can start driving license 🚗`);
// } else {
//   const yearsleft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsleft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// Coding Challenge #2
// const MassMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // const MassMark = 95;
// // const heightMark = 1.88;
// // const massJohn = 85;
// // const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// // Type Conversion and coercion

// //type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

// Truthy and Falsy values

// 5 falsy vales: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log('Jonas');
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//   console.log(`Don't spend it all`);
// } else {
//   console.log(`You should get a job`);
// }

// let height = 0;
// if (height) {
//   console.log(`Yay! Height is defined!`);
// } else {
//   console.log(`Height is undefined!`);
// }

// Equality operators: == vs. ===
