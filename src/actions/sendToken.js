const { PublicKey, SystemProgram, Transaction } = require('@solana/web3.js');
const { getConnection, getWallet } = require('../utils/solana');

const sendSol = async (recipient, amountInSol) => {
  const connection = getConnection();
  const senderWallet = getWallet();
  const recipientKey = new PublicKey(recipient);

  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: senderWallet.publicKey,
      toPubkey: recipientKey,
      lamports: amountInSol * 1e9, // Convert SOL to lamports
    })
  );

  const signature = await connection.sendTransaction(transaction, [senderWallet]);
  await connection.confirmTransaction(signature, 'confirmed');
  console.log(`Transaction successful! Signature: ${signature}`);
};

module.exports = sendSol;
