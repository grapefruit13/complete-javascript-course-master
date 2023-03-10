// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1.  Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score)
// 3.  Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks 😉
// 4.  Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy
// Test data:
// §  Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// §  Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// §  Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀

// 1st try
// Data 1
let avgD = (96 + 108 + 89) / 3;
let avgK = (88 + 91 + 110) / 3;

if (avgD > avgK) {
    console.log('The winners are Dolphines!');
} else if (avgD < avgK) {
    console.log('The winners are Koalas!');
} else if (avgD == avgK) {
    console.log('Draw');
}

// Bonus 1
avgD = (97 + 112 + 109) / 3;
avgK = (109 + 95 + 106) / 3;

if (avgD > avgK && avgD >= 100) {
    console.log('The winners are Dolphines!');
} else if (avgD < avgK && avgK >= 100) {
    console.log('The winners are Koalas!');
} else if (avgD === avgK) {
    console.log('Draw');
}

// Bonus 2
avgD = (97 + 112 + 109) / 3;
avgK = (109 + 95 + 106) / 3;

if (avgD > avgK && avgD >= 100) {
    console.log('The winners are Dolphines!');
} else if (avgD < avgK && avgK >= 100) {
    console.log('The winners are Koalas!');
} else if (avgD === avgK && avgD >= 100 && avgK >= 100) {
    console.log('Draw');
} else {
    console.log('No teams win trophy!🤣')
}

//------------------
//solution

// const scoreDolphines = (98 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphines, scoreKoalas);

// if (scoreDolphines > scoreKoalas) {
//     console.log('Dolphins win the trophy 😁');
// } else if (scoreKoalas > scoreDolphines) {
//     console.log('Koalas win the trophy 😁');
// } else if (scoreDolphines === scoreKoalas) {
//     console.log('Both win the trophy!');
// }

// BONUS 1
// const scoreDolphines = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphines, scoreKoalas);

// if (scoreDolphines > scoreKoalas && scoreDolphines >= 100) {
//     console.log('Dolphins win the trophy 😁');
// } else if (scoreKoalas > scoreDolphines && scoreKoalas >= 100) {
//     console.log('Koalas win the trophy 😁');
// } else if (scoreDolphines === scoreKoalas) {
//     console.log('Both win the trophy!');
// }

// BONUS 2
const scoreDolphines = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphines, scoreKoalas);

if (scoreDolphines > scoreKoalas && scoreDolphines >= 100) {
    console.log('Dolphins win the trophy 😁');
} else if (scoreKoalas > scoreDolphines && scoreKoalas >= 100) {
    console.log('Koalas win the trophy 😁');
} else if (scoreDolphines === scoreKoalas && scoreDolphines >= 100 && scoreKoalas >= 100 ) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy 😒');
}