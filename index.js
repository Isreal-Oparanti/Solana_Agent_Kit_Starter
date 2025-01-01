const readline = require('readline');
const sendSol = require('./src/actions/sendToken');
const checkBalance = require('./src/actions/checkBalance');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mainMenu = () => {
  console.log('\nSolana Starter Kit');
  console.log('1. Check Wallet Balance');
  console.log('2. Send SOL');
  console.log('3. Exit');
  rl.question('Choose an option: ', async (choice) => {
    switch (choice) {
      case '1':
        await checkBalance();
        break;
      case '2':
        rl.question('Recipient Public Key: ', (recipient) => {
          rl.question('Amount in SOL: ', async (amount) => {
            await sendSol(recipient, parseFloat(amount));
            mainMenu();
          });
        });
        break;
      case '3':
        rl.close();
        console.log('Goodbye!');
        return;
      default:
        console.log('Invalid choice. Try again.');
    }
    mainMenu();
  });
};

mainMenu();
