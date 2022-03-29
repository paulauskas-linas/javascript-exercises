const removeFromArray = function(originalArray, ...arrayToRemove) {
console.log(originalArray);
console.log(...arrayToRemove);
console.log(Array.isArray(arrayToRemove));
for (let i=0; i<originalArray.length; i++) {
    for (let j=0; j<arrayToRemove.length; j++) {
        if (originalArray[i]===arrayToRemove[j]) {
            originalArray.splice(i,1);
            i--;
        } 
    }
}

console.log(originalArray);
return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
