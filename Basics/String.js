const name = "Ayush"
const hometown = "Gorakhpur"
//console.log(name +" "+ hometown);
//console.log(`Hello my name is ${name} and my hometown is ${hometown}`);

const game = new String('Rummy-ludo-Carrom-Uno')
console.log(game[0]);
console.log(game.__proto__);

console.log(game.length);
console.log(game.toUpperCase());
console.log(game.charAt(4));

const newString = game.substring(0,2)
console.log(newString);

const NextString = game.slice(-4 , 0)
console.log(NextString);

// trim =>vacant and newline
// replaces=>in string the char and with that replace
//  includes=> in string
console.log(game.split('-'));
