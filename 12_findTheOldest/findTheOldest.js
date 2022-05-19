const findTheOldest = function(people) {
    const oldestToYoungest = people.sort(function(a, b) {
        const calcAge = function(dead, born){
            if(!dead) {
                dead = new Date().getFullYear();
            }
            return dead - born;
        };
        const lastPerson = calcAge(a.yearOfDeath, a.yearOfBirth);
        const nextPerson = calcAge(b.yearOfDeath, b.yearOfBirth);
        return lastPerson > nextPerson ? -1 : 1;
    })
   return oldestToYoungest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
