const cowsay = require("cowsay");
const information = require('./information.js'); 

console.log(cowsay.say({
    text : `${information.userName} ${information.campus}`,
      e : "oO",
    T : "U "
}));






