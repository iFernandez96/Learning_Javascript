const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input_lines = [];

rl.on('line', (line) => {
    input_lines.push(line);
}).on('close', () => {
    let sum = 0;
    for (let num of input_lines[1].split(" ")) {
        sum += parseInt(num);
    }
    console.log(sum);
  rl.close();
});
