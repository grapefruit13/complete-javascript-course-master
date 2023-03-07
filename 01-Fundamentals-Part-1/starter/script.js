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