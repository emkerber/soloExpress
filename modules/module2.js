//Javascript

//to export the toUsd function
module.exports = {
  toUsd: toUsd
}

//converts a number to USD format
function toUsd(number) {
  number = number.toFixed(2); //to limit the number to two decimal places
  number = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //to add commas to seperate the thousands
  //console.log('to US Dollar:', '$' + number);
  return '$' + number; //adds the $
};
