const sumAll = function(...args) {
    const argsArray = args.sort((a,b)=>a-b); //sorts array in numeric fashion, otherwise would sort by UTF-16 unit code value
    let hasNegative = args.some(item => item < 0);
    let isString = args.some(item => typeof item === "string");
    let isArray = args.some(item => Array.isArray(item));
    if (hasNegative === true || 
        isString === true ||
        isArray === true) {
        return "ERROR"
    } else {
       let sum = 0;
        while (argsArray[0] <= argsArray[1]) {
            sum +=argsArray[0];
            argsArray[0]++;
        }
        return sum; 
    }
};

// Do not edit below this line
module.exports = sumAll;
