/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Varicable name conventions
let jonas_maitlda = "JM";
let $function = 27;
let name = 'Jonas';

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);
*/

/*
let javascriptIsFun = true; 
console.log(javascriptIsFun);

console.log(typeof true); 
console.log(typeof javascriptIsFun); 
console.log(typeof 23); 
console.log(typeof 'Jonas'); 

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job =  'teacher';

lastName = 'Schmedtmann';
console.log(lastName);
*/

/*
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means the power of 3 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x + 4 = 100
x++; // x = x + 1
x--; 
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
// 17.Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

// 18.Taking Decisions: if / else Statements
/*
const age = 15;

if(age >= 18) {
  console.log('Sarach can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarach is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1998; 

let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
// 20. Type Conversion and Coercion
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion 타입 강압
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1; // 11 - 1
console.log(n);
*/

/*
// 21.Truthy and Falsy Values
// 5 falsy values : 0, '', undefined, null, NaN

console.log(Boolean(0)); //f
console.log(Boolean(undefined)); //f
console.log(Boolean('Jonas')); //t
console.log(Boolean({})); //t
console.log(Boolean()); //f

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if(height) {
    // if절 조건에 있는 height는 Boolean으로 변환되어, true 혹은 false 값을 갖는다.
    // 여기서 height 변수는 값이 undefined 되었으므로, flase값이 반환되어 else 문이 실행
    // height가 0일 경우에도 false가 반환된다. 0도 falsy value이기 때문에.
    // 이것은 응용 프로그램의 오류(버그)이며, 나중에 논리 연산자로 고칠 수 있다.
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/

/*
// 22. Equality Operators == double equal 등호 vs === triple equal 삼중등호

const age = '18';
if(age === 18) console.log('You just became an adult :D (strict)');

if(age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 34 -> FALSE
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7 or 9');
}

if(favourite !== 23) console.log('Why not 23?');
*/

// 23.Boolean Logic

// AND
// 하나라도 false면 false값 반환. 모두 true여야 true 값 반환

// OR
// 하나라도 true면 true값 반환. 모두 false면 false 값 반환.

// NOT
// inverts true/flase value. true는 false 반환. false는 true 반환.

// BOOLEAN VARIABLES
// age = 16
// A: Age is greater or equal 20 -> false
// B: Age is less than 30 -> true

// LET'S USE OPERATORS!
// !A -> false를 뒤집어 true로 반환
// A AND B -> false가 하나 있으므로 false 반환
// A OR B -> true가 하나라도 있으므로 true 반환
// !A AND B -> 둘 다 true 이므로 true 반환
// A OR !B -> 둘 다 false 이므로 false 반환

/*
// 24. Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision)  {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired)  {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone should drive...');
}
*/

/*
// 26. The switch statement

const day = 'monday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

// switch문을 if-else 문으로 변환
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if ( day === 'tuesday') {
    console.log('Prepare theory videos');
} else if ( day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if ( day === 'friday') {
    console.log('Record videos');
} else if ( day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}
*/

/*
// 27. Statements (;로 끝남 ex if statement) and Expressions (식 ex 변수)

3 + 4
1991
true && false && !false

if (23>10) {
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old.`);
*/

/*
// 28.Conditional (Ternary) Operator

const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water🧊'); 

const drink = age >= 18 ? 'wine 🍷' : 'water 🧊';
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 🧊';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🧊'}`);
*/

// 29. JavaScript Releases: ES5, ES6+ and ESNext

// A brief history of JS
// 1995 very first version of JS in just 10 days. Mocha
// 1996 Mocha->JavaScript. no relationship with Java
// 1997 official standard for JS. ES1. ECMAScript
// 2009 ES5 is released
// 2015 the biggest update to the language ever. ES6/ES2015
// 2016 ~. annual release cycle. ES2016 ~

// Backward compatibility : don't break the web
// 새 버전으로 업데이트가 되어도, 전 버전의 기능이 그대로 제공된다. 호환된다.
// Old features are never removed
// Not really new versions, just incremental updates (releases)
// websites keep working forever

// How to use modern javascript today
// Google Chrome, Bable to transpile and polyfill your code
// Es5 : ready to be used today
// ES6->ES2020 : can use most features in production with transpiling and polyfilling
// ES2021 ~ : can already use some features in production with transpiling ~












