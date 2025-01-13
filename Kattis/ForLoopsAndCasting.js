const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let num_numbers = parseInt(line);
    for (let num = 1; num <= num_numbers; num++) {
        console.log(num.toFixed() + "Abracadabra");
    }
    
});