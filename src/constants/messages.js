/**
 *
 * TomoWallet - Common Messages
 *
 * This file defines all common React Intl message objects
 * that'll be used in many places in the web app
 */
// ===== IMPORTS =====
// Modules
import { defineMessages } from 'react-intl';
// ===================

// ===== MESSAGES =====
const basePrefix = 'tomowallet';
const commonPrefix = `${basePrefix}.common`;
const componentPrefix = `${basePrefix}.component`;
const containerPrefix = `${basePrefix}.container`;
const buttonPrefix = `${commonPrefix}.button`;
const navbarPrefix = `${componentPrefix}.navbar`;
const welcomePagePrefix = `${containerPrefix}.welcome`;
const createWalletPagePrefix = `${containerPrefix}.createwallet`;
const warningPagePrefix = `${createWalletPagePrefix}.warning`;
const recoveryPhrasePrefix = `${createWalletPagePrefix}.recoveryphrase`;
const verificationPrefix = `${createWalletPagePrefix}.verification`;
const successNotificationPrefix = `${createWalletPagePrefix}.successnotification`;
const importWalletPagePrefix = `${containerPrefix}.importwallet`;

export default defineMessages({
  // Common - Button
  COMMON_BUTTON_BACK: {
    id: `${buttonPrefix}.back`,
    defaultMessage: 'Back',
  },
  COMMON_BUTTON_NEXT: {
    id: `${buttonPrefix}.next`,
    defaultMessage: 'Next',
  },
  COMMON_BUTTON_SAVE: {
    id: `${buttonPrefix}.save`,
    defaultMessage: 'Save',
  },
  COMMON_BUTTON_IMPORT: {
    id: `${buttonPrefix}.import`,
    defaultMessage: 'Import',
  },
  // Header Navigation Bar
  HEADER_NAVBAR_LOGO_ALT: {
    id: `${navbarPrefix}.logo.alt`,
    defaultMessage: 'TOMOCHAIN LOGO',
  },
  HEADER_NAVBAR_OPTION_ABOUT: {
    id: `${navbarPrefix}.option.about`,
    defaultMessage: 'Abouts',
  },
  HEADER_NAVBAR_OPTION_FAQS: {
    id: `${navbarPrefix}.option.faqs`,
    defaultMessage: 'FAQs',
  },
  HEADER_NAVBAR_OPTION_MY_WALLET: {
    id: `${navbarPrefix}.option.mywallet`,
    defaultMessage: 'My Wallet',
  },
  HEADER_NAVBAR_OPTION_MY_WALLET_OPTION_SHOW_PROFILE: {
    id: `${navbarPrefix}.option.mywallet.option.showprofile`,
    defaultMessage: 'Show Profile',
  },
  HEADER_NAVBAR_OPTION_MY_WALLET_OPTION_SETTINGS: {
    id: `${navbarPrefix}.option.mywallet.option.settings`,
    defaultMessage: 'Settings',
  },
  HEADER_NAVBAR_OPTION_MY_WALLET_OPTION_LOG_OUT: {
    id: `${navbarPrefix}.option.mywallet.option.logout`,
    defaultMessage: 'Log out',
  },
  // Welcome Page
  WELCOME_TITLE: {
    id: `${welcomePagePrefix}.title`,
    defaultMessage: 'Welcome to TomoWallet',
  },
  WELCOME_DESCRIPTION: {
    id: `${welcomePagePrefix}.description`,
    defaultMessage:
      'TomoWallet (our friends call us TMW) is a free, client-side interface helping you interact with the TomoChain. Our easy-to-use, open-source platform allows you to generate wallets, interact with smart contracts, and so much more.',
  },
  WELCOME_BUTTON_CREATE_NEW_WALLET: {
    id: `${welcomePagePrefix}.button.createnewwallet`,
    defaultMessage: 'Create a New Wallet',
  },
  WELCOME_TEXT_BETWEEN_BUTTONS: {
    id: `${welcomePagePrefix}.textbetweenbuttons`,
    defaultMessage: 'or',
  },
  WELCOME_BUTTON_IMPORT_WALLET: {
    id: `${welcomePagePrefix}.button.importwallet`,
    defaultMessage: 'Import Your Wallet',
  },
  WELCOME_IMAGE_ALT: {
    id: `${welcomePagePrefix}.image.alt`,
    defaultMessage: 'Welcome to TomoWallet',
  },
  // Create Wallet - Warning Page
  WARNING_HEADER_TITLE: {
    id: `${warningPagePrefix}.header.title`,
    defaultMessage: 'Create New Wallet',
  },
  WARNING_HEADER_ALTERNATIVE_TEXT: {
    id: `${warningPagePrefix}.header.alternative.text`,
    defaultMessage: 'Already have a wallet?',
  },
  WARNING_HEADER_ALTERNATIVE_LINK: {
    id: `${warningPagePrefix}.header.alternative.link`,
    defaultMessage: 'Import your wallet',
  },
  WARNING_IMAGE_ALT: {
    id: `${warningPagePrefix}.image.alt`,
    defaultMessage: 'Warning!',
  },
  WARNING_CONTENT_TITLE: {
    id: `${warningPagePrefix}.content.title`,
    defaultMessage: "Let's secure your account",
  },
  WARNING_CONTENT_DESCRIPTION: {
    id: `${warningPagePrefix}.content.description`,
    defaultMessage:
      'Your backup phrase contains all of the private keys within your wallet. Please write down these 12 words, in order, and keep them somewhere safe offline. This phrase will gives you (or anyone who has it) a way to restore your wallet and access your funds. In the event that you lose your password or our service is unavailable, this will be your safety net.',
  },
  WARNING_CONTENT_DESCRIPTION_DANGER: {
    id: `${warningPagePrefix}.content.description.danger`,
    defaultMessage:
      'If you lose your recovery phrase, you will be unable to recover access to your account',
  },
  WARNING_BUTTON_NEXT_TO_RECOVERY_PHRASE: {
    id: `${warningPagePrefix}.button.nexttorecoveryphrase`,
    defaultMessage: 'Next to Recovery Phrase',
  },
  // Create Wallet - Recovery Phrase Page
  RECOVERY_PHRASE_TITLE: {
    id: `${recoveryPhrasePrefix}.title`,
    defaultMessage: 'Recovery Phrase',
  },
  RECOVERY_PHRASE_NOTIFICATION_TITLE: {
    id: `${recoveryPhrasePrefix}.notification.title`,
    defaultMessage: 'Please back up recovery phrase',
  },
  RECOVERY_PHRASE_NOTIFICATION_DESCRIPTION: {
    id: `${recoveryPhrasePrefix}.notification.description`,
    defaultMessage:
      'Back up the text below on paper and keep it somewhere secret and save.',
  },
  RECOVERY_PHRASE_BUTTON_SAVE: {
    id: `${recoveryPhrasePrefix}.button.save`,
    defaultMessage: 'Save Recovery Phrase',
  },
  RECOVERY_PHRASE_BUTTON_VIEW_PRIVATE_KEY: {
    id: `${recoveryPhrasePrefix}.button.view.privatekey`,
    defaultMessage: 'View my private key',
  },
  RECOVERY_PHRASE_BUTTON_CONFIRMATION: {
    id: `${recoveryPhrasePrefix}.button.confirmation`,
    defaultMessage: 'I Wrote My Recovery Phrase',
  },
  RECOVERY_PHRASE_POPUP_CONFIRMATION_IMAGE_ALT: {
    id: `${recoveryPhrasePrefix}.popup.confirmation.image.alt`,
    defaultMessage: 'Did you note down?',
  },
  RECOVERY_PHRASE_POPUP_CONFIRMATION_HEADER: {
    id: `${recoveryPhrasePrefix}.popup.confirmation.header`,
    defaultMessage: 'Recovery Phrase?',
  },
  RECOVERY_PHRASE_POPUP_CONFIRMATION_CONTENT: {
    id: `${recoveryPhrasePrefix}.popup.confirmation.content`,
    defaultMessage: 'Are you sure you have noted down your Recovery Phrase?',
  },
  RECOVERY_PHRASE_POPUP_KEY_VIEW_HEADER: {
    id: `${recoveryPhrasePrefix}.popup.keyview.header`,
    defaultMessage: 'Private Key',
  },
  RECOVERY_PHRASE_POPUP_KEY_VIEW_CONTENT_TITLE: {
    id: `${recoveryPhrasePrefix}.popup.keyview.content.title`,
    defaultMessage: 'Your private key',
  },
  RECOVERY_PHRASE_POPUP_KEY_VIEW_CONTENT_TEXT: {
    id: `${recoveryPhrasePrefix}.popup.keyview.content.text`,
    defaultMessage:
      'Back up the text below on paper and keep it somewhere secret and save.',
  },
  RECOVERY_PHRASE_POPUP_KEY_VIEW_CONTENT_QRCODE_ALT: {
    id: `${recoveryPhrasePrefix}.popup.keyview.content.qrcode.alt`,
    defaultMessage:
      'Click here to view QR Code. Make sure no one else is looking!',
  },
  // Create Wallet - Mnemonic Verification Page
  VERIFICATION_TITLE: {
    id: `${verificationPrefix}.title`,
    defaultMessage: 'Verification',
  },
  VERIFICATION_DESCRIPTION: {
    id: `${verificationPrefix}.description`,
    defaultMessage:
      'Verify your Recovery Phrase. Choose each word in the correct order',
  },
  VERIFICATION_BUTTON_VERIFY: {
    id: `${verificationPrefix}.button.verify`,
    defaultMessage: 'Verify',
  },
  VERIFICATION_ERROR_VERIFY_FAILED: {
    id: `${verificationPrefix}.error.verify.failed`,
    defaultMessage: 'Incorrect recovery phrase order.',
  },
  // Create Wallet - Success Notification Page
  SUCCESS_NOTIFICATION_IMAGE_ALT: {
    id: `${successNotificationPrefix}.image.alt`,
    defaultMessage: 'Success!',
  },
  SUCCESS_NOTIFICATION_CONTENT_TITLE: {
    id: `${successNotificationPrefix}.content.title`,
    defaultMessage: 'Successful',
  },
  SUCCESS_NOTIFICATION_CONTENT_DESCRIPTION: {
    id: `${successNotificationPrefix}.content.description`,
    defaultMessage: "You've created your new wallet successfully",
  },
  SUCCESS_NOTIFICATION_BUTTON_ACCESS_WALLET: {
    id: `${successNotificationPrefix}.button.accesswallet`,
    defaultMessage: 'Access your wallet now',
  },
  // Import Wallet Page
  IMPORT_WALLET_HEADER_TITLE: {
    id: `${importWalletPagePrefix}.header.title`,
    defaultMessage: ' Import Your Wallet',
  },
  IMPORT_WALLET_ALTERNATIVE_TEXT: {
    id: `${importWalletPagePrefix}.alternative.text`,
    defaultMessage: 'Do not have a wallet?',
  },
  IMPORT_WALLET_ALTERNATIVE_LINK: {
    id: `${importWalletPagePrefix}.alternative.link`,
    defaultMessage: 'Create a new wallet',
  },
  IMPORT_WALLET_TAB_LEDGER_IMAGE_ALT: {
    id: `${importWalletPagePrefix}.tab.ledger.image.alt`,
    defaultMessage: 'Ledger',
  },
  IMPORT_WALLET_TAB_LEDGER_TEXT: {
    id: `${importWalletPagePrefix}.tab.ledger.text`,
    defaultMessage: 'Ledger Wallet',
  },
  IMPORT_WALLET_TAB_LEDGER_INPUT_LABEL: {
    id: `${importWalletPagePrefix}.tab.ledger.input.label`,
    defaultMessage: 'Select HD derivation path',
  },
  IMPORT_WALLET_TAB_LEDGER_INPUT_PLACEHOLDER: {
    id: `${importWalletPagePrefix}.tab.ledger.input.placeholder`,
    defaultMessage: 'Select HD derivation path...',
  },
  IMPORT_WALLET_TAB_LEDGER_INPUT_DESCRIPTION: {
    id: `${importWalletPagePrefix}.tab.ledger.input.description`,
    defaultMessage:
      "To unlock the wallet, try paths m/44'/60'/0 or m/44'/60'/0'/0 with Ethereum App, or try path m/44'/889'/0'/0 with TomoChain App (on Ledger)",
  },
  IMPORT_WALLET_TAB_RECOVERY_PHRASE_TEXT: {
    id: `${importWalletPagePrefix}.tab.recoveryphrase.text`,
    defaultMessage: 'Recovery Phrase/ Private Key',
  },
  IMPORT_WALLET_TAB_RECOVERY_PHRASE_INPUT_LABEL: {
    id: `${importWalletPagePrefix}.tab.recoveryphrase.input.label`,
    defaultMessage: 'Enter your Recovery Phrase or Private Key',
  },
  IMPORT_WALLET_TAB_RECOVERY_PHRASE_INPUT_PLACEHOLDER: {
    id: `${importWalletPagePrefix}.tab.recoveryphrase.input.placeholder`,
    defaultMessage: 'Enter your Recovery Phrase or Private Key...',
  },
  IMPORT_WALLET_TAB_RECOVERY_PHRASE_OPTION_IMPORT_VIA_QRCODE: {
    id: `${importWalletPagePrefix}.tab.recoveryphrase.option.importviaqrcode`,
    defaultMessage: 'Import Private Key via QR code',
  },
  IMPORT_WALLET_ERROR_INVALID_RECOVERY_PHRASE: {
    id: `${importWalletPagePrefix}.error.invalid.recoveryphrase`,
    defaultMessage: 'Invalid recovery phrase/private key',
  },
  IMPORT_WALLET_ERROR_INVALID_HD_PATH: {
    id: `${importWalletPagePrefix}.error.invalid.hdpath`,
    defaultMessage: 'Invalid HD Path',
  },
});
// ====================
