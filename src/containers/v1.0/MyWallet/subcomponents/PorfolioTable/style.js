/**
 *
 * TomoWallet - My Wallet Page - Porfolio Table - Styles
 *
 */
// ===== IMPORTS =====
// Modules
import styled from 'styled-components';
// ===================

// ===== STYLE =====
const TokenCellStyler = styled.div`
  display: flex;
  align-items: center;
  .block-symbol {
    img {
      width: 34px;
    }
  }
  .block-token {
    padding-left: 10px;
    line-height: 1;
    .block-token__name {
      font-size: 16px;
      color: #9eaacc;
    }
    .block-token__publisher {
      font-size: 14px;
      color: #5e677f;
      margin-top: 5px;
    }
  }
`;

const ActionCellStyler = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .block-send,
  .block-receive,
  .block-details {
    flex: 0 1 auto;
  }
`;
// =================

export { TokenCellStyler, ActionCellStyler };