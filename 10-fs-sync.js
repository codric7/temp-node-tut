const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./Content/first.txt', 'utf8');
const second = readFileSync('./Content/second.txt', 'utf8');
const result = readFileSync('./Content/result-sync.txt');

writeFileSync('./Content/result-sync.txt',
 `This is the result: ${first}, ${second}`, { flag: 'a' }
);
console.log('Done with this task');
console.log('Starting the next one');


