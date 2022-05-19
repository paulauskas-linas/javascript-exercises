const palindromes = function (string) {
    //take the string, make lowercase for case-sensitive removal and make an array of it
    const editedArray = string.toLowerCase().split('');
    // filter the array for punctuation
    for (let i = 0; i < editedArray.length; i++) {
        if(editedArray[i] === '!' ||
        editedArray[i]  === ',' ||
        editedArray[i]  === '.' || 
        editedArray[i]  === '?' ||
        editedArray[i]  === ' ') {
            editedArray.splice(i, 1, '');
        }
    }
    // make string from array
    const editedString = editedArray.join('');
    // make a copy of original array, reverse and join into the string
    const reversedString = Array.from(editedArray).reverse().join('');
    // compare the strings
    return reversedString == editedString;

};

// Do not edit below this line
module.exports = palindromes;
