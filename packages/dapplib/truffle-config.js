require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict robot flock tribe stool cost random universe gentle light army gentle'; 
let testAccounts = [
"0x349839112701552a3f13d6a5ed1b66f589f5cafd21c8b92f695ed57860ed1fb0",
"0x74408a0ac2b7aaa6389e96f76e7014ab2ca6d6ddbe3c2d00f4529abb0e3be1c7",
"0x01c097c36766712f756a68bd95997e043904ba975027771b1caeb00c5e63efc7",
"0x6cb0f22c73da540856c69c0a1235d72d2d21090cc314df640154679267f5eaac",
"0xa75a8bafc80d24a2c955d2349ef9498403d6e0b90a5dbc4cdc423ed1a72a145b",
"0xf586d5af1c4bc0637220ce92ca689eecdff6f30c00b32b52cb6b2350afcc51e2",
"0x6a42b1d68a33c4dff66a551b21e90aa2282ddf448fb96732fae10bf90223d867",
"0x1301256cccc8b2dc228a60a7d92f34038509d6516aa2dfde8011dbc4573a19eb",
"0x85ac6b73ec6fd1c227c78ba81aca5540c9f55c45111d4addc3bb9f3497f157ce",
"0x4acd742496d446c68a001ba274da0fcdabcc5b41f3327872fd17e015d31a774b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


