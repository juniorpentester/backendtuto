const { log } = require('node:console');
const path = require('node:path');

let delimiter = path.delimiter;

console.log('the path delimiter is ' + delimiter);

let dirname = path.dirname('C:\\Users\\HP\\Documents\\accounting interview question\\question.txt')
console.log(dirname);

let pathJoin = path.join(__dirname, 'subfolder', 'try.txt');
console.log(pathJoin);

let base = path.basename(pathJoin);
console.log(base);

console.log(process);