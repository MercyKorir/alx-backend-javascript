const readline = require('readline');
const process = require('process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

rl.on('line', (name) => {
  process.stdout.write(`\rYour name is: ${name}\n`);
  process.stdout.write('This important software is now closing\n');
  rl.close();
});
