const { readFile, writeFile } = require("fs"); // async, run a callback

console.log('start')
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err,result) => 
      { 
        if (err) {
            console.log(err);
            return;
          }
          console.log('done with this task')

      }
    );
  });
});
console.log('starting next task ') //different from sync because this gets offloaded first before proceeding 