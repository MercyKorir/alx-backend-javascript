const readline = require('readline');
const process = require('process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForName() {
  rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
    if (name.trim() === '') {
      console.log('This important software is now closing');
      rl.close();
    } else {
      console.log(`Your name is: ${name}`);
      askForName();
    }
  });
}

askForName();

rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
