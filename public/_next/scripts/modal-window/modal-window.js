class ModalWindow {
  #id = null;
  #modalContainer = null;
  #bgContainer = null;
  #bodyContainer = null;
  #bodyDeepContainer = null;
  #header = null;
  #contentContainer = null;
  #options


  constructor(id, title, options = {}) {
    this.#id = id;
    this.#options = options;
    this.#createModalContainer();
    this.#createHeader(title);
    this.#createContentContainer();
    this.#inject();
  }

  open() {
    this.#modalContainer.style.display = "flex";
  }

  close() {
    this.#modalContainer.style.display = "none";
  }

  getContentContainer() {
    return this.#contentContainer;
  }

  #createModalContainer() {
    this.#modalContainer = document.createElement("div");
    this.#modalContainer.classList.add("sc-9a5c5c2c-0", "hwLgmH", "appear");
    this.#modalContainer.setAttribute("id", this.#id);
    this.#modalContainer.setAttribute(
      "style",
      "transform:translateX(0); display:none;"
    );

    this.#bgContainer = document.createElement("div");
    this.#bgContainer.classList.add(
      "sc-3fcdcbc5-1",
      "sc-e3542fa4-",
      "gbBSc",
      "kmDJta"
    );
    this.#bgContainer.setAttribute("id", "presentation3");
    this.#bgContainer.setAttribute("role", "presentation");

    this.#bodyContainer = document.createElement("div");
    this.#bodyContainer.classList.add(
      "sc-3fcdcbc5-0",
      "sc-4ada2311-3",
      "eQjyfT",
      "bQkQJY"
    );
    this.#bodyContainer.cssText = "overflow:visible;";

    this.#bodyDeepContainer = document.createElement("div");
    this.#bodyDeepContainer.classList.add("sc-3fcdcbc5-1", "bdaybJ");

    this.#modalContainer.appendChild(this.#bgContainer);
    this.#modalContainer.appendChild(this.#bodyContainer);
    this.#bodyContainer.appendChild(this.#bodyDeepContainer);
  }

  #createHeader(text = "") {
    this.#header = document.createElement("div");
    this.#header.classList.add(
      "sc-3fcdcbc5-1",
      "sc-2d18e992-0",
      "sc-4ada2311-0",
      "eAXZIi",
      "jbkGBG",
      "jTmjww",
    );

    if (this.#options.flat) {
      this.#header.style.background = "transparent";
      this.#header.style.borderBottom = "0";
    };

    const title = document.createElement("div");
    title.classList.add(
      "sc-3fcdcbc5-1", "sc-2d18e992-0", "sc-4ada2311-1","gbBSci", "jbkGBG", "glTJBy"
    );
    title.innerHTML = `
      <h2 class="sc-bad5c764-0 sc-d3773c3c-0 cIMvfv dCGsLH">
        ${text}
      </h2>
    `;
    this.#header.appendChild(title);
    
    const btnClose = document.createElement("button");
    btnClose.classList.add("sc-6b7e583a-0", "jpIfbr", "sc-a43322ca-0", "eCQPkV");
    btnClose.setAttribute("variant", "text");
    btnClose.setAttribute("aria-label", "Close the dialog");
    btnClose.setAttribute("scale", "md");
    btnClose.innerHTML = `
      <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-df97f1b-0 egdMRr">
        <path fill="currentColor" d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"></path>
      </svg>
    `;
    btnClose.addEventListener("click", () => this.close())
    this.#header.appendChild(btnClose);
  }

  #createContentContainer() {
    this.#contentContainer = document.createElement("div");
    this.#contentContainer.classList.add(
      "sc-3fcdcbc5-1",
      "sc-2d18e992-0",
      "sc-4ada2311-2",
      "euxrPu",
      "jbkGBG",
      "bRpoEX"
    );
  }

  #inject() {
    const dialogContainer = document.getElementById("dialog");
    dialogContainer.appendChild(this.#modalContainer);
    this.#bodyDeepContainer.appendChild(this.#header);
    this.#bodyDeepContainer.appendChild(this.#contentContainer);
  }
}