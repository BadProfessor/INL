/*
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
// const age = '18';
// if (age === 18) console.log(`You just became an adult :D (strict)`);

// if (age == 18) console.log(`You just became an adult :D (loose)`);

// const favourite = Number(prompt(`What's your favorite number?`));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   // 22 === 23 -> FALSE
//   console.log(`Cool! 23 is an amazing number!`);
// } else if (favourite === 7) {
//   console.log(`7 is also a cool number!`);
// } else if (favourite === 9) {
//   console.log(`9 is also a cool number!`);
// } else {
//   console.log(`Number is not 23 or 7 or 9`);
// }

// if (favourite !== 23) console.log(`Why not 23?`);

// Logical operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //     console.log(`Sarah is able to drive!`);
// // } else {
// //     console.log(`Someone else should drive...`);
// // }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Some else should drive...`);
// }

// Coding Challenge #3
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log(`Koalas win the trophy`);
// } else if (scoreDolphins === scoreKoalas) {
//   console.log(`Both win the trophy!`);
// }

// // Bonus 1
// const scoreDolphins1 = (97 + 112 + 80) / 3;
// const scoreKoalas1 = (88 + 91 + 110) / 3;
// console.log(scoreDolphins1, scoreKoalas1);

// if (scoreDolphins1 > scoreKoalas1 && scoreDolphins1 >= 100) {
//   console.log(`Dolphins win the trophy`);
// } else if (scoreKoalas1 > scoreDolphins1 && scoreKoalas1 >= 100) {
//   console.log(`Koalas win the trophy`);
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log(`Both win the trophy!`);
// } else {
//   console.log(`No one wins the trophy`);
// }

// // The Switch Statement
// const day = `friday`;

// switch (day) {
//   case `monday`: // day ===
//     'monday';
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup`);
//     break;
//   case `tuesday`:
//     'monday';
//     console.log(`Prepare theory videos`);
//     break;
//   case `wednesday`:
//   case `thursday`:
//     console.log(`Write code examples`);
//     break;
//   case `friday`:
//     console.log(`Record videos`);
//     break;
//   case `saturday`:
//   case `sunday`:
//     console.log(`Enjoy the weekend :D`);
//     break;
//   default:
//     console.log(`Not a valid day!`);
//     break;
// }

// if (day === `monday`) {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === `tuesday`) {
//   console.log('Prepare theory videos');
// } else if (day === `wednesday` || day === `thursday`) {
//   console.log('Write code examples');
// } else if (day === `friday`) {
//   console.log('Record videos');
// } else if (day === `saturday` || day === `sunday`) {
//   console.log('Enjoy the weekend :D');
// } else {
//   console.log(`Not a valid day!`);
// }
// Statements and expressions
// 3 + 4;
// 1991;
// true && false && !false;

// if (23 > 10) {
//   const str = `23 is bigger`;
// }

// const me = `Jonas`;
// console.log(`I'm ${2037 - 1991} years od ${me}`);
// The Conditional (Ternary) Operator
const age = 23;
// age >= 18
//   ? console.log(`I like to drink wine`)
//   : console.log(`I like to drink water`);

// const drink = age >= 18 ? `wine` : `water`;
// console.log(drink);
// let drink2;
// if (age >= 18) {
//   drink2 = `wine`;
// } else {
//   drink2 = `water`;
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? `wine` : `water`}`);
// Coding Challenge #4
// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value was ${
//     bill + 5
//   }`
// );

Block comment
*/