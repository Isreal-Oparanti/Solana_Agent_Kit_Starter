jest.mock('@solana/web3.js', () => ({
  ...jest.requireActual('@solana/web3.js'),
  Connection: jest.fn().mockImplementation(() => ({
    rpcEndpoint: 'https://api.devnet.solana.com',
  })),
  Keypair: {
    fromSecretKey: jest.fn().mockReturnValue({
      publicKey: 'mockPublicKey',
    }),
  },
}));

const { getWallet, getConnection } = require('./solana');

test('Wallet loads correctly', () => {
  const wallet = getWallet();
  expect(wallet.publicKey).toBe('mockPublicKey');
});

test('Connection establishes successfully', () => {
  const connection = getConnection();
  expect(connection.rpcEndpoint).toBe('https://api.devnet.solana.com');
});
