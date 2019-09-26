/**
 *
 * TomoWallet - Utility - Blockchain - Wallet Utilities
 *
 */
// ===== IMPORTS =====
// Modules
import Web3 from 'web3';
import HDWalletProvider from 'truffle-hdwallet-provider';
import _isEmpty from 'lodash.isempty';
import _isEqual from 'lodash.isequal';
// Utilities
import trc20 from '../../contractABIs/trc20.json';
import trc21 from '../../contractABIs/trc21.json';
import trc21Issuer from '../../contractABIs/trc21Issuer.json';
import { decimalsToBN, bnToDecimals, repeatGetTransaction } from './utilities';
import { ENUM } from '../../constants';
// ===================

// ===== SUPPORTED VARIABLES =====
const DEFAULT_RPC_SERVER = {
  type: 'http',
  host: 'https://rpc.tomochain.com',
  networkId: 88,
  hdPath: "m/44'/889'/0'/0/",
};
const TOMO_Z_CONTRACT_ADDRESS = {
  TOMOCHAIN_MAINNET: '0x8c0faeb5c6bed2129b8674f262fd45c4e9468bee',
  TOMOCHAIN_TESTNET: '0x7081c72c9dc44686c7b7eab1d338ea137fa9f0d3',
};
const DEFAULT_GAS_PRICE = '250000000';
const DEFAULT_GAS_TOKEN = '500000';
const DEFAULT_GAS_CURRENCY = '21000';
const DEFAULT_CURRENCY_DECIMALS = 18;
const defaultCallback = error => console.error('[ERROR]: ', error);
// ===============================

// ===== METHODS =====
/**
 * PUBLIC - createWeb3
 *
 * Create a new Web3 object with provided mnemonic & RPC server configuration
 * @param {String} mnemonic A 12-word recovery phrase or a private key in hex format
 * @param {Object} serverConfig Current RPC server configuration
 * @param {Function} callback (optional) Action to handle exception
 */
const createWeb3 = (
  mnemonic = '',
  serverConfig = {},
  callback = defaultCallback,
) => {
  const { hdPath, host, type } = serverConfig;
  let provider;

  try {
    if (mnemonic) {
      provider = new HDWalletProvider(mnemonic, host, 0, 1, true, hdPath);
    } else if (!_isEmpty(serverConfig)) {
      if (type === 'ws') {
        provider = new Web3.providers.WebsocketProvider(host);
      } else if (type === 'ipc') {
        provider = new Web3.providers.IpcProvider(host);
      } else {
        provider = new Web3.providers.HttpProvider(host);
      }
    }

    return new Web3(provider);
  } catch (error) {
    callback(error);
    return null;
  }
};

/**
 * PRIVATE - getAddressFromProvider
 *
 * Retrieve account address from current Web3 provider
 * @param {Web3} web3 A Web3 object with provider initiated
 */
const getAddressFromProvider = web3 => {
  return (
    web3.currentProvider.selectedAddress ||
    (web3.currentProvider.addresses && web3.currentProvider.addresses[0])
  );
};

/**
 * PUBLIC - mnemonicToPrivateKey
 *
 * Get private key from recovery phrase & RPC server configuration
 * @param {String} mnemonic A 12-word recovery phrase
 * @param {Object} serverConfig Current RPC server configuration
 */
const mnemonicToPrivateKey = (mnemonic = '', serverConfig = {}) => {
  const web3 = createWeb3(mnemonic, serverConfig);
  if (web3) {
    const address = getAddressFromProvider;
    const pkInBytes = web3.currentProvider.wallets[address]._privKey;

    return web3.utils.bytesToHex(pkInBytes).replace(/^0x/, '');
  }
  return '';
};

/**
 * PUBLIC - getWalletInfo
 *
 * Retrieve wallet's basic information from current Web3 provider
 * @param {Web3} web3 A Web3 object with provider initiated
 */
const getWalletInfo = web3 => {
  if (web3) {
    const address = getAddressFromProvider(web3);
    if (address) {
      return web3.eth.getBalance(address).then(balance => ({
        address,
        balance,
      }));
    }
  }
  return new Promise((_, rj) =>
    rj(
      new Error(
        'Cannot find wallet information. Please check your web3 provider.',
      ),
    ),
  );
};

/**
 *
 * @param {String} address A valid hex-string address
 * @param {Object} customServer (optional) Custom RPC server configuration
 */
const getBalance = (address, customServer) => {
  const network =
    typeof customServer === 'object' ? customServer : DEFAULT_RPC_SERVER;
  const web3 = createWeb3(null, network);

  if (web3.utils.isAddress(address)) {
    return web3.eth.getBalance(address);
  }

  return new Promise((_, rj) =>
    rj(
      new Error(
        'Cannot get address balance. Either given address or RPC server is invalid.',
      ),
    ),
  );
};

/**
 * isAppliedTomoZ
 *
 * Check if the given token is applied TomoZ (has its own transaction fee)
 * @param {Web3} web3 A Web3 object with provider initiated
 * @param {Object} txData Set of transaction data (from, to, amount...)
 * @param {Boolean} isTestnet Check condition to determine TomoZ address to use
 */
const isAppliedTomoZ = (web3, txData, isTestnet) => {
  const { contractAddress, from } = txData;
  const tomoZContract = new web3.eth.Contract(
    trc21Issuer,
    isTestnet
      ? TOMO_Z_CONTRACT_ADDRESS.TOMOCHAIN_TESTNET
      : TOMO_Z_CONTRACT_ADDRESS.TOMOCHAIN_MAINNET,
  );
  return tomoZContract.methods
    .getTokenCapacity(contractAddress)
    .call({ from })
    .then(cap => {
      if (Number(cap)) {
        return true;
      }
      return false;
    })
    .catch(() => false);
};

/**
 * estimateTRC20Fee
 *
 * Calculate transaction fee for sending TRC20 token
 * @param {Web3} web3 A Web3 object with provider initiated
 * @param {Object} txData Set of transaction data
 */
const estimateTRC20Fee = (web3, txData) => {
  const { amount, contractAddress, decimals, from, to } = txData;
  const contract = new web3.eth.Contract(trc20, contractAddress || from);
  const weiAmount = decimalsToBN(amount, decimals);

  return contract.methods
    .transfer(to, weiAmount)
    .estimateGas({ from })
    .then(gas =>
      web3.eth.getGasPrice().then(price => {
        const fee = bnToDecimals(
          web3.utils.toBN(gas).mul(web3.utils.toBN(price)),
          DEFAULT_CURRENCY_DECIMALS,
        );

        return {
          type: ENUM.TOKEN_TYPE.TRC20,
          amount: fee,
          gas,
          gasPrice: price,
        };
      }),
    );
};

/**
 * estimateTRC21Fee
 *
 * Calculate transaction fee for sending TRC21 token
 * @param {Web3} web3 A Web3 object with provider initiated
 * @param {Object} txData Set of transaction data
 */
const estimateTRC21Fee = (web3, txData) => {
  const { amount, contractAddress, decimals, from, to } = txData;
  const contract = new web3.eth.Contract(trc21, contractAddress || from);
  const weiAmount = decimalsToBN(amount, decimals);

  return isAppliedTomoZ(web3, txData).then(isApplied => {
    if (isApplied) {
      return contract.methods
        .estimateFee(weiAmount)
        .call({ from, to })
        .then(fee => ({
          type: ENUM.TOKEN_TYPE,
          amount: bnToDecimals(fee, decimals),
          gas: DEFAULT_GAS_TOKEN,
          gasPrice: DEFAULT_GAS_PRICE,
        }));
    }
    return estimateTRC20Fee(web3, txData);
  });
};

/**
 * estimateCurrencyFee
 *
 * Calculate transaction fee for sending native currency
 * @param {Web3} web3 A Web3 object with provider initiated
 * @param {Object} txData Set of transaction data
 */
const estimateCurrencyFee = (web3, txData) => {
  const { decimals, type } = txData;
  const fee = bnToDecimals(
    web3.utils
      .toBN(DEFAULT_GAS_PRICE)
      .mul(web3.utils.toBN(DEFAULT_GAS_CURRENCY)),
    decimals,
  );

  return new Promise(rs =>
    rs({
      type,
      amount: fee,
      gas: DEFAULT_GAS_CURRENCY,
      gasPrice: DEFAULT_GAS_PRICE,
    }),
  );
};

/**
 * sendToken
 *
 * Execute sending token transaction
 * @param {Web3} web3 A Web3 object with supported APIs
 * @param {Object} txData An object which contains contract data
 */
const sendToken = (web3, txData) => {
  const { amount, contractAddress, decimals, from, to, type } = txData;
  const tokenAbi = _isEqual(type, ENUM.TOKEN_TYPE.TRC21) ? trc21 : trc20;
  const contract = new web3.eth.Contract(tokenAbi, contractAddress);
  const weiAmount = decimalsToBN(amount, decimals);

  return new Promise(rs => {
    if (type === ENUM.TOKEN_TYPE.TRC20) {
      rs(estimateTRC20Fee(web3, txData));
    } else if (type === ENUM.TOKEN_TYPE.TRC21) {
      rs(estimateTRC21Fee(web3, txData));
    }
  }).then(priceObj =>
    contract.methods
      .transfer(to, weiAmount)
      .send({
        from,
        gas: priceObj.gas,
        gasPrice: priceObj.gasPrice,
      })
      .on('transactionHash', hash => {
        repeatGetTransaction(web3, hash);
      }),
  );
};

/**
 * sendMoney
 *
 * Execute token transfer contract
 * @param {Web3} web3 A Web3 object with supported APIs
 * @param {Object} txData An object which contains contract data
 */
const sendMoney = (web3, txData) => {
  const { amount, decimals, from, to } = txData;
  const remainDecimals =
    amount.indexOf('.') !== -1
      ? decimals - (amount.length - 1 - amount.indexOf('.'))
      : decimals;
  const weiAmount = web3.utils
    .toBN(`${amount}`.replace('.', ''))
    .mul(web3.utils.toBN(10 ** remainDecimals))
    .toString(10);

  return web3.eth.sendTransaction({
    from,
    gas: DEFAULT_GAS_CURRENCY,
    gasPrice: DEFAULT_GAS_PRICE,
    to,
    value: weiAmount,
  });
};
// ===================

export {
  createWeb3,
  estimateCurrencyFee,
  estimateTRC20Fee,
  estimateTRC21Fee,
  getBalance,
  getWalletInfo,
  mnemonicToPrivateKey,
  sendMoney,
  sendToken,
};