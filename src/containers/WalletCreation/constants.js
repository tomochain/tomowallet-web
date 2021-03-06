/**
 *
 * TomoWallet - Wallet Creation Page - Constants
 *
 */
// Actions
export const ADD_WORD = 'TOMOWALLET/CREATE_NEW_WALLET/ADD_WORD';
export const CLEAR_COMPARISON = 'TOMOWALLET/CREATE_NEW_WALLET/CLEAR_COMPARISON';
export const REMOVE_WORD = 'TOMOWALLET/CREATE_NEW_WALLET/REMOVE_WORD';
export const RESET_STATE = 'TOMOWALLET/CREATE_NEW_WALLET/RESET_STATE';
export const REVEAL_PASSSWORD_INPUT =
  'TOMOWALLET/CREATE_NEW_WALLET/REVEAL_PASSSWORD_INPUT';
export const SET_FORM_STATES = 'TOMOWALLET/CREATE_NEW_WALLET/SET_FORM_STATES';
export const SET_PRIVATE_KEY = 'TOMOWALLET/CREATE_NEW_WALLET/SET_PRIVATE_KEY';
export const SHUFFLE_MNEMONIC = 'TOMOWALLET/CREATE_NEW_WALLET/SHUFFLE_MNEMONIC';
export const STORE_MNEMONIC = 'TOMOWALLET/CREATE_NEW_WALLET/STORE_MNEMONIC';
export const TOGGLE_CONFIRMATION_POPUP =
  'TOMOWALLET/CREATE_NEW_WALLET/TOGGLE_CONFIRMATION_POPUP';
export const TOGGLE_KEY_VIEW_POPUP =
  'TOMOWALLET/CREATE_NEW_WALLET/TOGGLE_KEY_VIEW_POPUP';
export const TOGGLE_KEY_VISIBLE =
  'TOMOWALLET/CREATE_NEW_WALLET/TOGGLE_KEY_VISIBLE';
export const TOGGLE_PASSWORD_POPUP =
  'TOMOWALLET/CREATE_NEW_WALLET/TOGGLE_PASSWORD_POPUP';
export const UPDATE_ERRORS = 'TOMOWALLET/CREATE_NEW_WALLET/UPDATE_ERRORS';
export const UPDATE_INPUT = 'TOMOWALLET/CREATE_NEW_WALLET/UPDATE_INPUT';
export const UPDATE_PASSWORD_POPUP_ERRORS =
  'TOMOWALLET/CREATE_NEW_WALLET/UPDATE_PASSWORD_POPUP_ERRORS';
export const UPDATE_PASSWORD_POPUP_INPUT =
  'TOMOWALLET/CREATE_NEW_WALLET/UPDATE_PASSWORD_POPUP_INPUT';
export const UPDATE_PASSWORD_POPUP_STATE =
  'TOMOWALLET/CREATE_NEW_WALLET/UPDATE_PASSWORD_POPUP_STATE';

// Domain key
export const DOMAIN_KEY = 'walletCreation';

// Wallet Creation Form States
export const FORM_STATES = {
  WARNING: 1,
  RECOVERY_PHRASE: 2,
  VERIFICATION: 3,
  SUCCESS: 4,
};

// Password Popup States
export const PASSWORD_POPUP_STATES = {
  PASSWORD: 1,
  CONFIRMATION: 2,
};
