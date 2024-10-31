var rounded = function (number, chr = 8) {
  return +number.toFixed(chr);
};
function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

fetch("../jsons/tokens.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data.tokens);
    let list_of_tokens = document.getElementById("list_of_tokens");
    list_of_tokens.innerHTML = "";
    let price_of_tokens = {};
    tokens.forEach((element) => {
      // console.log(element);

      let div = document.createElement("div");
      div.className =
        "sc-3fcdcbc5-1 sc-b26f41e2-0 sc-b26f41e2-1 sc-97b67103-2 gbBSci ehsacR flCJXJ hjeOMs token-item-0x55d398326f99059fF775485246999027B3197955";
      div.id = `${element.symbol}-list-element`;
      div.innerHTML = `<img
                        class="sc-a9381537-0 bEErXJ"
                        alt="logo"
                        data-savepage-src="https://tokens.pancakeswap.finance/images/symbol/usdt.png"
                        src="${element.logoURI}"
                      />
                      <div class="_1a5xov70 _1qhetbf6 _1qhetbf16 _1qhetbf7c">
                        <div class="sc-bad5c764-0 cIMvfv token_name">${element.symbol}</div>
                        <div class="sc-bad5c764-0 iyMfqe">${element.name}</div>
                      </div>
                      `;

      list_of_tokens.appendChild(div);
      // let img = document.createElement('img');
      // img.className = "sc-a9381537-0 bEErXJ";
      // img.src = element.logoURI;
      // console.log(img);

      price_of_tokens[element.symbol] = element.price;
    });
    let target = "";

    function closeModal() {
      var modals = document.getElementById("dialog").children;
      for (var i = 0; i < modals.length; ++i) {
        modals[i].style.display = "none";
      }
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
    }

    // () => {
    //     document.getElementById('choose_token').style.display = 'flex';
    //     document.body.style.overflow = "hidden";
    //     target = document.getElementById('select_first');

    //     let list_of_tokens = document.getElementById('list_of_tokens').children;
    //     for (var i = 0; i < list_of_tokens.length; ++i) {
    //         list_of_tokens[i].onclick = chooseToken;

    //         if (list_of_tokens[i].querySelector('.token_name').innerText == target.querySelector('#pair').innerText){
    //             list_of_tokens[i].classList.add('icOgmy');
    //             list_of_tokens[i].classList.remove('hjeOMs')

    //         }
    //         else{
    //             list_of_tokens[i].classList.remove('icOgmy');
    //             list_of_tokens[i].classList.add('hjeOMs');
    //         }

    //     }

    // }

    // document.getElementById('select_second').onclick = (e) => {
    //     document.getElementById('choose_token').style.display = 'flex';
    //     document.body.style.overflow = "hidden";
    //     target = e.target.closest('button')
    //     // console.log(target);
    //     // console.log(e.target.closest('button'));

    //     let list_of_tokens = document.getElementById('list_of_tokens').children;
    //     for (var i = 0; i < list_of_tokens.length; ++i) {
    //         list_of_tokens[i].onclick = chooseToken;

    //         if (list_of_tokens[i].querySelector('.token_name').innerText == target.querySelector('#pair').innerText){
    //             list_of_tokens[i].classList.add('icOgmy');
    //             list_of_tokens[i].classList.remove('hjeOMs')

    //         }
    //         else{
    //             list_of_tokens[i].classList.remove('icOgmy');
    //             list_of_tokens[i].classList.add('hjeOMs');
    //         }

    //     }
    // }
    document.getElementById("select_first").onclick = addClickListeners;
    document.getElementById("select_second").onclick = addClickListeners;

    function addClickListeners(e) {
      document.getElementById("choose_token").style.display = "flex";
      document.body.style.overflow = "hidden";
      target = e.target.closest("button");

      let list_of_tokens = document.getElementById("list_of_tokens").children;
      for (var i = 0; i < list_of_tokens.length; ++i) {
          if (
              list_of_tokens[i].querySelector(".token_name").innerText ==
              target.querySelector("#pair").innerText
            ) {
          list_of_tokens[i].classList.add("icOgmy");
          list_of_tokens[i].classList.remove("hjeOMs");
        } else {
          list_of_tokens[i].classList.remove("icOgmy");
          list_of_tokens[i].classList.add("hjeOMs");
        }
      }

      let head_tokens = document.getElementById("head_tokens").children;
      //    console.log(head_tokens);

      //    console.log(target);

      for (var i = 0; i < head_tokens.length; ++i) {
        if (
          head_tokens[i].querySelector(".eWhFpV").innerText ==
          target.querySelector("#pair").innerText
        ) {
          head_tokens[i]
            .querySelector(".sc-ab454efe-1")
            .classList.add("cYFbJP");
          // head_tokens[i].querySelector('.sc-ab454efe-1').classList.remove('kzIUhL')
        } else {
          head_tokens[i]
            .querySelector(".sc-ab454efe-1")
            .classList.remove("cYFbJP");
          // head_tokens[i].querySelector('.sc-ab454efe-1').classList.add('kzIUhL');
        }
      }
    }

    document.getElementById("close_dialog").onclick = closeModal;
    document.getElementById("close_dialog2").onclick = closeModal;
    document.getElementById("close_dialog3").onclick = closeModal;
    document.getElementById("close_dialog4").onclick = closeModal;
    document.getElementById("cancel_btn").onclick = closeModal;

    pres = document.querySelectorAll(".kmDJta");
    pres.forEach((element) => {
      element.onclick = closeModal;
    });

    var inputs = document.querySelectorAll(".token-amount-input");

    inputs[0].addEventListener("input", (event) => {
      if (event.target.value.at(-1) === ".") return;
      const value = Math.abs(parseFloat(event.target.value || "0.0"));

      if (isNaN(value)) return event.target.value = 0;
      event.target.value = value;
    });

    inputs[1].addEventListener("input", (event) => {
        if (event.target.value.at(-1) === ".") return;
      const value = Math.abs(parseFloat(event.target.value || "0.0"));

      if (isNaN(value)) return (event.target.value = 0);
      event.target.value = value;
    });

    function chooseToken() {
      var img1 = this.firstElementChild;
      var img2 = target.firstElementChild.firstElementChild;
      img3 = img1.cloneNode(true);
      img3.style.marginRight = "8px";

      target.firstElementChild.insertBefore(img3, img2);
      target.firstElementChild.removeChild(img2);

      var name1 = this.getElementsByClassName("token_name")[0].innerText;
      target.querySelector("#pair").innerText = name1;

      // var balance1 = this.querySelector(".eZMcbx").innerText;
      // target.parentNode.parentNode.querySelector('.iKrMUR').innerText = "Balance: " + balance1;
      var inputs = document.querySelectorAll(".token-amount-input");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
      }
      var courses = document.querySelectorAll(".course");
      for (let i = 0; i < courses.length; i++) {
        courses[i].innerText = "~0.00 USD";
      }

      closeModal();

      // target.firstElementChild.firstElementChild.removeChild();
    }

    list_of_tokens = document.getElementById("list_of_tokens").children;
    for (var i = 0; i < list_of_tokens.length; ++i) {
      // console.log(list_of_tokens[i].querySelector('.cIMvfv'));
      list_of_tokens[i].onclick = chooseToken;
      // list_of_tokens[i].addEventListener('click', chooseToken(this))
      // chooseToken(list_of_tokens[i])
    }

    head_tokens = document.getElementById("head_tokens").children;
    for (let i = 0; i < head_tokens.length; i++) {
      // el = document.querySelector('#' + head_tokens[i].textContent.trim() + '-list-element');

      head_tokens[i].onclick = () => {
        document
          .querySelector(
            "#" + head_tokens[i].textContent.trim() + "-list-element"
          )
          .click();
      };
      // console.log(el);

      // console.log(head_tokens[i].textContent.trim());
    }

    const search = document.querySelector("#token-search-input");
    const allLinks = document.querySelectorAll(".flCJXJ");

    // console.log(allLinks);

    search.onkeyup = function (event) {
      const regex = new RegExp(event.target.value.toLowerCase());
      allLinks.forEach((element) => {
        // console.log(element);

        token_name = element.querySelector(".token_name");
        // console.log(token_name);

        if (token_name && regex.test(token_name.innerText.toLowerCase())) {
          element.style.display = "";
        } else {
          element.style.display = "none";
        }
      });
    };

    let inps = document.querySelectorAll(".token-amount-input");
    let swap = document.getElementById("swap-button");
    inps.forEach((inp) => {
      inp.onkeyup = function (event) {
        if (event.target.value != 0) {
          swap.innerText = "Swap";
          swap.removeAttribute("disabled");
          swap.classList.remove("pancake-button--disabled");

          document.querySelector(".dhUhHi").style.display = "";
          document.querySelector("._1qhetbf40").style.display = "";
        } else {
          swap.innerText = "Enter an amount";
          swap.setAttribute("disabled", "");
          swap.classList.add("pancake-button--disabled");

          document.querySelector(".dhUhHi").style.display = "none";
          document.querySelector("._1qhetbf40").style.display = "none";
        }

        let price_block = this.closest("#swap-currency-input");
        let input = document.querySelector("#swap-currency-input");
        let input_inp = input.querySelector(".token-amount-input");
        let output = document.querySelector("#swap-currency-output");
        let output_inp = output.querySelector(".token-amount-input");

        if (price_block) {
          let current_price = parseFloat(
            price_of_tokens[price_block.querySelector("#pair").innerText]
          );
          dollar_price = this.value * current_price;
          let output_price = parseFloat(
            price_of_tokens[output.querySelector("#pair").innerText]
          );
          output_inp.value = rounded(dollar_price / output_price);
        } else {
          price_block = this.closest("#swap-currency-output");
          let current_price = parseFloat(
            price_of_tokens[price_block.querySelector("#pair").innerText]
          );
          dollar_price = this.value * current_price;
          let input_price = parseFloat(
            price_of_tokens[input.querySelector("#pair").innerText]
          );
          input_inp.value = rounded(dollar_price / input_price);
        }

        var el = document.getElementById("price_1");
        var parentEl = el.parentNode;

        price_div = document.createElement("div");
        price_div.className =
          "_1a5xov70 _1qhetbf6 _1qhetbf1pu _1qhetbf2i _1qhetbf8c _1qhetbft0 _1qhetbf40";
        price_div.setAttribute("id", "price_1");
        // price_div.style

        course =
          parseFloat(price_of_tokens[input.querySelector("#pair").innerText]) /
          parseFloat(price_of_tokens[output.querySelector("#pair").innerText]);
        input_name = input.querySelector("#pair").innerText;
        output_name = output.querySelector("#pair").innerText;

        price_div.innerHTML = `<div class="sc-bad5c764-0 knOdfw">Price</div>
                                <div class="sc-bad5c764-0 cgdgln" style="
                                    justify-content: center;
                                    align-items: center;
                                    display: flex;
                                    opacity: 1;
                                  ">
                                  1 ${input_name}<svg viewBox="0 0 24 25" width="14px" height="14px" color="textSubtle" ml="4px" mr="4px" xmlns="http://www.w3.org/2000/svg" class="sc-df97f1b-0 deJZUo">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z"></path></svg>${rounded(
                                      course
                                    )} ${output_name}
                                  <div class="_1a5xov70 _1qhetbf1v0 _1qhetbf2k3 _1qhetbf34n _1qhetbf6 _1qhetbf7i _1qhetbf2i z84kgln" role="button">
                                    <svg viewBox="0 0 24 24" width="14px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-df97f1b-0 ejMcUv">
                                      <path d="M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z"></path>
                                    </svg>
                                  </div>
                                </div>`;

        parentEl.insertBefore(price_div, el);
        parentEl.removeChild(el);

        let input_modal_info = document.querySelector("#input_modal_info");
        let output_modal_info = document.querySelector("#output_modal_info");

        input_modal_info.querySelector(".lfBCgg").innerText = input_inp.value;
        output_modal_info.querySelector(".lfBCgg").innerText = output_inp.value;

        input_modal_info.querySelector(".bWyRSl").innerText = input_name;
        output_modal_info.querySelector(".bWyRSl").innerText = output_name;

        input_modal_info.querySelector(".jPriFD").src =
          input.querySelector("img").src;
        output_modal_info.querySelector(".jPriFD").src =
          output.querySelector("img").src;

        document.querySelector("#confirm_input").innerText =
          input_inp.value + " " + input_name;
        document.querySelector("#confirm_output").innerText =
          output_inp.value + " " + output_name;

        bottom_panel = document.querySelector("#bottom_panel");
        bottom_panel.querySelector("#minimum").innerText =
          parseFloat(output_inp.value) * 0.995 + " " + output_name;

        fee = parseFloat(output_inp.value) * 0.0025;
        bottom_panel.querySelector("#fee_saved").innerText =
          rounded(fee) + " " + output_name;
          console.log(rounded(fee) + " " + output_name);

        bottom_panel.querySelector("#fee_saved_dollar").innerText =
          "(~$" +
          parseFloat(fee) * parseFloat(price_of_tokens[output_name]) +
          ")";
        bottom_panel.querySelector("#traiding_fee").innerText =
          rounded(parseFloat(input_inp.value) * 0.0001) + " " + input_name;
        document.querySelector("#route_1").innerText = input_name;
        document.querySelector("#route_2").innerText = output_name;

        document.querySelector("#modal_traiding_fee img").src =
          input.querySelector("img").src;
        document.querySelector("#modal_traiding_fee .eStCgZ").innerText =
          rounded(parseFloat(input_inp.value) * 0.0001) + " " + input_name;

        document.querySelector("#modal_minimum_name").innerText = output_name;
        document.querySelector("#modal_minimum_sum").innerText =
          parseFloat(output_inp.value) * 0.995;
        1;
        document.querySelector("#modal_price").innerText =
          output_inp.value / 10 + " " + output_name + "/" + input_name;

        document.querySelector("#confirm_input_img").src =
          input.querySelector("img").src;
        document.querySelector("#confirm_output_img").src =
          output.querySelector("img").src;

        document.querySelector(
          "#modal_description"
        ).innerText = `Output is estimated. You will receive at least ${
          parseFloat(output_inp.value) * 0.995 + " " + output_name
        } or the transaction will revert.`;

        input_course = input.querySelector(".course");
        input_course.innerText = `~${rounded(
          input_inp.value *
            parseFloat(price_of_tokens[input.querySelector("#pair").innerText])
        )} USD`;

        output_course = output.querySelector(".course");
        output_course.innerText = `~${rounded(
          output_inp.value *
            parseFloat(price_of_tokens[output.querySelector("#pair").innerText])
        )} USD`;

        document.getElementById("input_modal_info").style.display = "flex";
        document.getElementById("input_modal_info").style.justifyContent = "space-between";
        document.getElementById("output_modal_info").style.display = "flex";
        document.getElementById("output_modal_info").style.justifyContent ="space-between";

        // for (let i = 0; i < document.querySelectorAll(".flexim").length; i++) {
        //   document.querySelectorAll(".flexim")[i].style.display = "flex";
        // }
      };
    });

    const transferMW = new TransferModalWindow(() => {
      document.getElementById("swap_modal").style.display = "flex";
    });

    const approvedMV = new ApprovedModalWindow();

    const openConfirmModalWindow = () => {
      document.getElementById("confirm_input_modal").style.display = "flex";
      // document.body.style.overflow = "hidden";
    };

    document
      .querySelectorAll("#confirm-swap-or-send")[1]
      .addEventListener("click", () => openConfirmModalWindow());

    swap.onclick = () => {
      transferMW.open();
    };

    document.getElementById("confirm-swap-or-send").onclick = () => {
      document.getElementById("confirm_modal").style.display = "flex";
      document.getElementById("swap_modal").style.display = "none";
      // document.body.style.overflow = "hidden";

      setTimeout(function () {
        document.getElementById("confirm_modal").style.display = "none";
        document.getElementById("approved_modal").style.display = "flex";
      }, 3000);
    };

    // setTimeout(function(){
    //     document.getElementById('catizen_modal').style.display = 'flex';
    //     document.body.style.overflow = "hidden";
    // }, 3000)

    document.querySelector("#ok_btn").onclick = () => {
      if (document.querySelector(".bKkeej").value.toLowerCase() == "confirm") {
        closeModal();
        document.querySelector("#confirm_modal").style.display = "flex";

        setTimeout(() => {
          closeModal();
          approvedMV.open();
        }, 3000);
      } else {
        closeModal();
      }
    };
  });

function redirect(href) {
  window.location.href = href;
}

let header = document.querySelector(".huuQTR");
let last_scroll = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY > 126) {
    if (last_scroll <= window.scrollY) {
      header.classList.remove("huuQTR");
      header.classList.add("cfPgCj");
    }
  } else {
    header.classList.remove("cfPgCj");
    header.classList.add("huuQTR");
  }
  last_scroll = window.scrollY;
});

document.querySelector("#close_afisha").onclick = () => {
  document.querySelector(".jIORGQ").style.display = "none";
  document.querySelector("._1qhetbf1").style.marginTop = "57px";
};
