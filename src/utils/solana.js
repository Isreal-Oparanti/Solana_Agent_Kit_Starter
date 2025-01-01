const { Connection, Keypair } = require('@solana/web3.js');
const { getEnvVar } = require('./config');

// Initialize Solana connection
const getConnection = () => {
  const clusterUrl = getEnvVar('SOLANA_CLUSTER', 'https://api.devnet.solana.com');
  return new Connection(clusterUrl, 'confirmed');
};

// Load wallet from private key
const getWallet = () => {
  const secretKey = Uint8Array.from(JSON.parse(getEnvVar('SOLANA_PRIVATE_KEY')));
  return Keypair.fromSecretKey(secretKey);
};

module.exports = {
  getConnection,
  getWallet,
};
