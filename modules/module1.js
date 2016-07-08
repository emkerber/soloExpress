//Javascript

//to export the random function
module.exports = {
  random: random
}

//to generate random numbers
function random(min, max) {
  //console.log('random:', Math.random() * (max - min) + min);
  return Math.random() * (max - min) + min;
};
