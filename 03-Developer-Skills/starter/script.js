// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const xyzabc = '23';

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1991));

/*
// 59. Using Google, StackOverflow and MDN
// PROBLEM 1

// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is tem amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arryas, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (temps[i] > max) max = curTemp;
    if (temps[i] < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

// 60. Debugging (Fixing Errors)

// Software bug: Defect or problem in a computer program. Basically, any unexpected or unintended behavior of a computer program is a software bug.
// Bugs are completely normal in software development!

// <Debugging Process>
// 1. Identify (Becoming aware that there is a bug) : During the development, Testing software, User reports during production, Context: browsers, users, etc.
// 2. Find (Isolating where exactly the bug is happening in code): Developer console(simple code), Debugger(complex code)
// 3. Fix (Correct the bug) : Replace wrong solution with new correct solution
// 4. Prevent : Searching for the same bug in similar code, Writing tests using testing software.

/*
// 61. Debugging with the console and Breakpoints

const measureKelvin = function () {
  const measurement = {
    typeof: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
*/

/*
// 61. Coding Challenge #1

// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1.  Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2.  Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// §  Data 1: [17, 21, 23]
// §  Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK 😀

//---------
// 1st Try
// let am;
// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let ai = arr.indexOf(arr[i]) + 1;
//     let answer = '... ' + arr[i] + 'C in ' + ai + ' days';
//     am = answer.concat(answer);
//     console.log(`... ${arr[i]} C in ${ai} days`);
//   }
// };

// printForecast([17, 21, 23]);

// result : fail

// 배열의 value와 index number 출력
// for문을 써서 한 문장으로 출력

//------------
// Solution

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings need to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ...`;
  }
  console.log('... ' + str);
};
printForecast(data1);

// // 2 + 3 = 5 + 4 = 9
// [2, 3, 4]
*/
