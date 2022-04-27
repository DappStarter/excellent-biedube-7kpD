require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn proof harvest clinic bubble shallow'; 
let testAccounts = [
"0xc64783ba9f65ba07b6f588b0c570c766c217461325d420e2b436a5122cd36088",
"0x5916aeba7ff9ff7dcfd0b292a6c5bcc628036c015ede52ed692ea59e70c9edb1",
"0xbf4aa4b288751f4de9b73061e0c5b5a7f873eabea926a51262b3bbad8d2c56dd",
"0x91e13171483a159305036a9f8fe553a0f3f807fa0ccc63236beff8430ab7f681",
"0x1781d38d1a7c2a007a8271ede67036760324b9b95290a8f4c069a352cc82dc68",
"0x85c71b863795c7e22f3dec738302a67e90262bed80cfbe983fdbf3e7b7371b22",
"0x893ff1fcf3d3d663ef0fc700053c80d39960e945b9d7d3b736486dc748356e6d",
"0x9ed4deff176bc782dd46d84f5de961efaf48f06e865e5d5f4c534cd6d5636406",
"0x440b0f1701e8f7a7228292b9c31f38f164f1129d714eb036c5129c8967f142b8",
"0xa1d6fea16b61324c7cfd2029baa1fc0a236378069e4cedfdafec65fa044f76e8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

