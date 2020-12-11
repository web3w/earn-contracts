
let host = "http://39.102.101.142:8545";
let Web3 = require("web3")
const web3 = new Web3(host)
let accounts = []

const {setupLoader} = require('@openzeppelin/contract-loader');


module.exports = {
    async getArttifact(name,isAt=true) {
        accounts = await web3.eth.getAccounts();
        const loader = setupLoader({
            defaultSender: accounts[0].address,
            provider: web3.currentProvider,
            defaultGas: 2e6,
            defaultGasPrice: 6e9,
        }).truffle;

        let path = __dirname + "/../" + loader.artifactsDir + "/" + name + ".json";
        let contract = require(path);
        let arttifact   = loader.fromArtifact(name)
        arttifact.setWallet(web3.eth.accounts.wallet)
        let _chainId = await web3.eth.getChainId();
        if (contract.networks[_chainId]&&isAt) {
            arttifact =await arttifact.at(contract.networks[_chainId].address)
        }
        return arttifact;
    },
    getAccounts() {
        return accounts
    },
    getWeb3() {
        return web3
    }
}
