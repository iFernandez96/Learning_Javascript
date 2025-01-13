const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input_lines = [];

rl.on('line', (line) => {
  input_lines.push(line);
}).on('close', () => {
  let first_line = input_lines[0].split(" ");
  let safety_lim = parseInt(first_line[0]);
  let num_events = parseInt(first_line[1]);
  
  let num_people_on_terrace = 0;
  let num_groups_denied = 0;
  for (let i = 1; i < input_lines.length; i++) {
      let input = input_lines[i].split(" ");
      if (input[0] == "enter") {
          if (parseInt(input[1]) + num_people_on_terrace > safety_lim){
            num_groups_denied++;
          } else {
              num_people_on_terrace += parseInt(input[1]);
          }
      } else if (input[0] == "leave") {
          num_people_on_terrace -= parseInt(input[1]);
      }
  }
  console.log(num_groups_denied);
  
  rl.close();
});
