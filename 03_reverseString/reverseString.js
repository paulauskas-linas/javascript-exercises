const reverseString = function(string) {
const stringArray = string.split('');
const reversedArray = stringArray.reverse();
const joinedArray = reversedArray.join('');
return joinedArray;
};

// Do not edit below this line
module.exports = reverseString;
