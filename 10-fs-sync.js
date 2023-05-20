const { readFileSync, writeFileSync } = require("fs"); // same as const fs
console.log('start');
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result:  ${first}, ${second}`
); //if the file doesn't exist, it creates it or overrrides

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result:  ${first}, ${second}`, 
  { flag: 'a'}
); // this helps to append it instead of replacing existing 

console.log('done with this task')
console.log('starting the next one')
