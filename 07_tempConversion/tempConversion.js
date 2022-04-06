const ftoc = function(f) {
let c = (f - 32) * 5/9;
let cr = Math.round(c * 10) / 10;
return cr;
};

const ctof = function(c) {
let f = c * 9/5 + 32;
let fr = Math.round(f * 10) / 10;
return fr;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
