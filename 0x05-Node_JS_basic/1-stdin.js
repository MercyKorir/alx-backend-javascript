const process = require('process');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf-8');

let name = '';

process.stdin.on('data', (data) => {
  const input = data.trim();
  if (input === 'exit') {
    process.stdout.write('This important software is now closing\n');
    process.exit(0);
  } else {
    name = input;
    process.stdout.write(`Your name is: ${name}\r`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit(0);
});

process.on('SIGINT', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit(0);
});
