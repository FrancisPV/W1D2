// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// takes in an unlimited number of command line arguments
// We need at least 2 arguments.
const argumentList = process.argv;
const elements = argumentList.slice(2);
let total = 0;
if(argumentList.length < 2) {
  console.log('please provide at least two arguments!')
} else {
for(let i = 0; i < argumentList.length; i++) {
  total += Number(argumentList[i]);
}
}
console.log(total)
