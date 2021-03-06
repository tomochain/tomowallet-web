import injectReducer from './injectReducer';
import injectSaga from './injectSaga';
import history from './history';
import createDeepEqualSelector from './deepSelector';
import {
  changeInputWithSubmit,
  convertLocaleNumber,
  copyToClipboard,
  detectSubmit,
  downloadFile,
  removeTrailingZero,
  shuffleArray,
  trimMnemonic,
} from './miscellaneous';
import {
  addBN,
  bnToDecimals,
  createWeb3,
  decimalsToBN,
  decryptKeystore,
  divBN,
  encryptKeystore,
  estimateCurrencyFee,
  estimateFee,
  estimateTRC20Fee,
  estimateTRC21Fee,
  getBalance,
  getWalletInfo,
  isAddress,
  isHDPath,
  isHex,
  isPrivateKey,
  isRecoveryPhrase,
  mnemonicToPrivateKey,
  mulBN,
  repeatGetTransaction,
  selectHDPath,
  sendMoney,
  sendSignedTransaction,
  sendToken,
  subBN,
  toBN,
  weiToDecimals,
  getPrivacyAddressInfo,
  depositPrivacyMoney,
  getPrivacyBalance,
  sendMoneyPrivacy,
  isPrivacyAddress,
  estimatePrivacyFee,
  withdrawPrivacy,
  getLastUTXO,
  checkSpentUTXO,
  prepareSendingTxs,
  prepareWithdrawingTxs,
  executeTransaction,
} from './blockchain';
import validations, { mergeErrors } from './validations';
import { withGlobal } from './injectGlobal';
import {
  getLedger,
  getLocale,
  getNetwork,
  getWeb3Info,
  getPrivacyMode,
  removeLedger,
  removeLocale,
  removeNetwork,
  removePrivacyMode,
  removeWeb3Info,
  setLedger,
  setNetwork,
  setLocale,
  setWeb3Info,
  setPrivacyInfo,
  setPrivacyMode,
  getPrivacyWalletInfo,
} from './storage';
import electron, {
  detectKeystore,
  isElectron,
  readKeystore,
  removeKeystore,
  writeKeystore,
} from './electron';

import {
  truncateMiddle,
  calculatePercentage,
} from './helper'

export {
  addBN,
  bnToDecimals,
  changeInputWithSubmit,
  convertLocaleNumber,
  copyToClipboard,
  createDeepEqualSelector,
  createWeb3,
  decimalsToBN,
  decryptKeystore,
  detectKeystore,
  detectSubmit,
  divBN,
  downloadFile,
  electron,
  encryptKeystore,
  estimateCurrencyFee,
  estimateFee,
  estimateTRC20Fee,
  estimateTRC21Fee,
  getBalance,
  getLedger,
  getLocale,
  getNetwork,
  getWalletInfo,
  getWeb3Info,
  history,
  injectReducer,
  injectSaga,
  isAddress,
  isElectron,
  isHDPath,
  isHex,
  isPrivateKey,
  isRecoveryPhrase,
  mergeErrors,
  mnemonicToPrivateKey,
  mulBN,
  readKeystore,
  removeKeystore,
  removeLedger,
  removeLocale,
  removePrivacyMode,
  removeNetwork,
  removeTrailingZero,
  removeWeb3Info,
  repeatGetTransaction,
  selectHDPath,
  sendMoney,
  sendSignedTransaction,
  sendToken,
  setLedger,
  setLocale,
  setNetwork,
  setWeb3Info,
  shuffleArray,
  subBN,
  toBN,
  trimMnemonic,
  validations,
  weiToDecimals,
  withGlobal,
  writeKeystore,
  getPrivacyAddressInfo,
  depositPrivacyMoney,
  getPrivacyBalance,
  sendMoneyPrivacy,
  setPrivacyInfo,
  isPrivacyAddress,
  estimatePrivacyFee,
  withdrawPrivacy,
  truncateMiddle,
  getLastUTXO,
  setPrivacyMode,
  getPrivacyMode,
  checkSpentUTXO,
  prepareSendingTxs,
  prepareWithdrawingTxs,
  executeTransaction,
  calculatePercentage,
  getPrivacyWalletInfo
};
