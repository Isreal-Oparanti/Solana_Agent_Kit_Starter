const { getConnection, getWallet } = require('../utils/solana');

const checkBalance = async () => {
  const connection = getConnection();
  const wallet = getWallet();
  const balance = await connection.getBalance(wallet.publicKey);
  console.log(`Wallet balance: ${balance / 1e9} SOL`);
};

module.exports = checkBalance;
