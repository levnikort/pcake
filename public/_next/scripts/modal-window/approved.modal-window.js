class ApprovedModalWindow extends ModalWindow {
  constructor() {
    super("approvedModalVindow", "", { flat: true });
  }

  open() {
    const container = this.getContentContainer();
    
    const amountEx = getCurrentAmount();
    const { exchangeToken, receiptToken } = getCurrentToken();
    const { axsAmount } = convertTokens(amountEx, exchangeToken.symbol, receiptToken.symbol);
    const { feeAmount } = swapAndCalculateFee(amountEx, exchangeToken.symbol, receiptToken.symbol, 10);
    const result = subtractTokens(axsAmount, receiptToken.symbol, feeAmount, "BNB", receiptToken.symbol);
    const resaltVault = convertTokens(
      result,
      receiptToken.symbol,
      receiptToken.symbol
    );


    container.innerHTML = `
      ${this.#getSVGIconSuccessHTML()}
      ${this.#getInfoBlockHTML({
        amount: formatTo10Digits(Math.abs(result)),
        token: receiptToken.symbol,
        amountDollar: resaltVault.dollarValue,
        fee: feeAmount,
      })}
      ${this.#getTextTransactionHTML()}
    `;

    super.open();
  }

  #getSVGIconSuccessHTML() {
    return `
      <div class="sc-3fcdcbc5-1 cGEJOa" style="margin-bottom: 0;">
        <svg viewBox="0 0 24 24" color="success" width="80" height="80" xmlns="http://www.w3.org/2000/svg" class="sc-df97f1b-0 cnulqD">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z"></path>
        </svg>
      </div>
    `;
  }

  #getTextTransactionHTML() {
    return `
      <div class="_1a5xov70 _1qhetbfc _1qhetbf2ao _1qhetbf8o">
        <div class="_1a5xov70 _1qhetbf6 _1qhetbf16 _1qhetbf7c sc-67a7ab6-0 fLbFQH">
          <div class="sc-bad5c764-0 edomhs">Transaction receipt</div>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://bscscan.com/tx/0x934a005dfffeed80a49fa18ad383432acb20f0b333f29daa8f689f8a2e5cce51"
            class="sc-bad5c764-0 sc-e718cb8-0 kPKtjP hcFsiw"
          >
            View on BscScan: 0x934a00...
            <svg
              viewBox="0 0 24 24"
              color="primary"
              ml="4px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-df97f1b-0 SuBoW"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 11.7792 21.9928 11.5602 21.9788 11.343C18.6515 16.824 10.797 19.3967 6.32085 20.232C7.93393 21.3469 9.8907 22 12 22ZM3.6987 17.5775C2.62604 15.9842 2 14.0652 2 12C2 6.47715 6.47715 2 12 2C16.6548 2 20.5667 5.18031 21.6815 9.48656C20.7816 11.0755 19.4244 12.3811 17.8282 13.4444V7.27607C17.8282 6.86948 17.4986 6.53988 17.092 6.53988H15.3742C14.9676 6.53988 14.638 6.86948 14.638 7.27607V15.0795C14.638 15.1034 14.6392 15.1269 14.6413 15.1501C14.2758 15.3076 13.906 15.4562 13.5337 15.5963V9.36196C13.5337 8.95537 13.2041 8.62577 12.7975 8.62577H11.0798C10.6732 8.62577 10.3436 8.95537 10.3436 9.36196V16.592C9.97218 16.6864 9.60348 16.7732 9.23926 16.8528V11.4479C9.23926 11.0413 8.90966 10.7117 8.50307 10.7117H6.78528C6.37869 10.7117 6.04908 11.0413 6.04908 11.4479V17.3941C5.17906 17.4987 4.38348 17.5575 3.6987 17.5775Z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    `;
  }

  #getInfoBlockHTML({
    amount,
    token,
    amountDollar,
    fee,
  } = {amount: 0.0, token: "BNB", amountDollar: 0.0, fee: 0.0}) {
    return `
    <div style="color: #ffffff; padding: 20px; padding-top: 0; text-align: center;">
      <p style="font-size: 24px; margin: 0; color: #fff;">
        + ${amount.toString().replace(".", ",")} ${token.toLocaleLowerCase()}
      </p>
      <p style="font-size: 12px; color: #a0a0a0; margin: 0px 0;">${amountDollar
        .toFixed(2)
        .replace(".", ",")} $</p>
      <p style="font-size: 12px; color: #31d0aa; margin: 14px 0; font-weight: 600; cursor: pointer;">
        View in my wallet
      </p>

      <div style="display: flex; justify-content: space-between; font-size: 12px; color: #a0a0a0; margin-top: 30px; padding-inline: 3rem;">
        <span style="font-weight: 600;">Blockchain</span>
        <span style="color: #ffffff;">BNB (Bep20)</span>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 12px; color: #a0a0a0; margin-top: 14px; padding-inline: 3rem;">
        <span style="font-weight: 600;">Status</span>
        <span style="color: #ffffff;">Sent</span>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 12px; color: #a0a0a0; margin-top: 14px; margin-bottom: 30px; padding-inline: 3rem;">
        <span style="font-weight: 600;">Fee</span>
        <span style="color: #ffffff;">${fee
          .toString()
          .replace(".", ",")} BNB</span>
      </div>
    </div>
    `;
  }
}