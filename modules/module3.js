//Javascript

//to import the functions
var modOne = require('./module1.js');
var modTwo = require('./module2.js');

//to combine the imported functions
function randomToUSD(min, max) {
  return modTwo.toUsd(modOne.random(min, max));
};

//to export the combined imported functions, and text
module.exports = {
  randomToUSD: randomToUSD,
  text: 'Account balance: \n'
}
