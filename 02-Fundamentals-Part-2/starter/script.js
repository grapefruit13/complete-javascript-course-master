/*
// 32. Activating strict Mode
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
*/

/*
// 33. Functions

function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

/*
// 34. Function Declarations vs Expressions

// Function declaration 함수 선언문
// 함수 선언문은 함수 이름과 함수 본문으로 구성되어 있으며, 
// 함수 이름을 사용하여 전역 스코프 또는 함수 내부에서 언제든지 호출할 수 있습니다.
// 함수 선언문은 코드가 실행되기 전에 처리되므로, 함수를 먼저 호출해도 정상적으로 실행됩니다.
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

console.log(age1);

// Function expression 함수 표현식
// Anonymous function 익명함수
// 함수 표현식은 변수에 함수를 할당하는 형태로 작성됩니다. 
// 이 변수는 전역 스코프 또는 함수 내부에서 호출할 수 있습니다. 
// 함수 표현식은 코드가 실행되면 변수에 함수가 할당되므로, 
// 변수가 선언되기 전에 함수를 호출하면 오류가 발생합니다.
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

// JS에서 함수는 type 타입(String, Number, Boolean etc)이 아니라 그냥 value 값이다
*/

/*
// 35. Arrow Function 화살표 함수

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
// 36. Functions Calling other function

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*
// 37. Reviewing Functions

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1; // It means meanglessness in Programming.
    }

    
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

/*
// 38. Coding Challenge #1

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team).
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2.  Use the function to calculate the average for both teams
// 3.  Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
// 4.  Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2
// 5.  Ignore draws this time
// Test data:
// §  Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// §  Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// GOOD LUCK 😀

// 1st try

// const calcAverage = (a, b, c) => {
//     return (a + b + c) / 3;
// }
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);
// console.log(avgDolphins);
// console.log(avgKoalas);

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if ((avgDolphins * 2) <= avgKoalas) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else if ((avgKoalas * 2) <= avgDolphins) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else {
//         console.log(`no team wins`)
//     }
// }
// checkWinner(avgDolphins, avgKoalas);

//------

// solution

const calcAverage = (a, b, c) => (a + b + c) /3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphines = calcAverage(44, 23, 71);
let scorekoalas = calcAverage(65, 54, 49);
console.log(scoreDolphines, scorekoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Dolphins win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...`)
    }
}
checkWinner(scoreDolphines, scorekoalas);

checkWinner(576, 111);

// Test 2
scoreDolphines = calcAverage(85, 54, 41);
scorekoalas = calcAverage(23, 34, 27);
console.log(scoreDolphines, scorekoalas);
checkWinner(scoreDolphines, scorekoalas);
*/

/*
// 39. Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // 배열의 마지막 값을 알고 싶으면 길이에서 -1

friends[2]  = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtamnn', 2-37 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/*
// 40. Basic Array Operations(Methods)

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay'); // 배열 맨 마지막에 추가하는 함수 push
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop(); // Last
console.log(popped);
console.log(friends);

friends.shift(); // First 
// friends.unshift(); //shift한 것을 되돌려줌
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // 배열에 없는 값의 인덱스를 찾으려하면 -1이 나옴

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23)); // includes는 strict해서 문자열 강압을 하지않으므로 23 != '23'

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}
*/
/*
// 41. Coding Challenge #2

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%.
// Your tasks:
// 1.  Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip, calculated based on the rules above (you can check out 
// the code from first tip calculator challenge if you need to). Use the function 
// type you like the most. Test the function using a bill value of 100
// 2.  And now let's use arrays! So create an array 'bills' containing the test data 
// below
// 3.  Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before
// 4.  Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

// GOOD LUCK 😀

// 1st Try

// const calcTip = (bill) => {
//     const tip = bill >= 50 && bill <= 300 ? 0.15:0.2;
//     return tip * bill;
// }
// console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// solution

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals =  [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

/*
// 42. Introduction to Objects

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
*/

/*
// 43. Dot vs Bracket Notation

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']); 

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// 속성 이름을 먼저 계산해야 할 때는 괄호 표기법 사용, 나머지는 dot notation 사용

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

/*
// 44. Object Methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense : true, 

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear; 
        return this.age; 
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

console.log(jonas.getSummary());
*/

/*
// 45. Coding Challenge #3

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
// implement the calculations! Remember: BMI = mass / height ** 2 = mass 
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1.  For each of them, create an object with properties for their full name, mass, and 
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
// method on both objects). Store the BMI value to a property, and also return it 
// from the method
// 3.  Log to the console who has the higher BMI, together with the full name and the 
// respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
// tall.
// GOOD LUCK 😀

//1st try

// const mark = {
//     name: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     } 
// }

// const john = {
//     name: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     } 
// }

// mark.calcBMI() > john.calcBMI() ? console.log(`${mark.name}'s BMI (${mark.bmi}) is higher than ${john.name}'s (${john.bmi})!`) : console.log(`${john.name}'s BMI (${john.bmi}) is higher than ${mark.name}'s (${mark.bmi})!`) ;

//solution

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    } 
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if(mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
};
*/

/*
// 46. Iteration: The for loop

// console.log('Lifting weights repetition 1 😁');
// console.log('Lifting weights repetition 2 😁');
// console.log('Lifting weights repetition 3 😁');
// console.log('Lifting weights repetition 4 😁');
// console.log('Lifting weights repetition 5 😁');
// console.log('Lifting weights repetition 6 😁');
// console.log('Lifting weights repetition 7 😁');
// console.log('Lifting weights repetition 8 😁');
// console.log('Lifting weights repetition 9 😁');
// console.log('Lifting weights repetition 10 😁');

// for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 😁`);
}
*/

/*
// 47. Looping Arrays, Breaking and Continuing

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for(let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for(let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for(let i = 0; i < jonas.length; i++) {
    if(typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}
*/

/*
// 48. Looping backwards and Loops in loops

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for(let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight reperition ${rep} 😁`);
    }
}
*/

/*
// 49. The while loop

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 😁`);
// }

let rep = 1; 
while (rep <= 10) {
    // console.log(`WHILE Lifting weights repetition ${rep} 😁`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);   
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
*/