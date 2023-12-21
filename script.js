let input1 = document.getElementById("money1");
let input2 = document.getElementById("money2");
let option1 = document.getElementById("currency1");
let option2 = document.getElementById("currency2");

function eurotorupee(euro) {
  let rupee = euro * 90.95;
  return rupee;
}
function rupeetoeuro(rupee) {
  let euro = rupee / 90.95;
  return euro;
}
function eurotousd(e) {
  let usd = e * 1.09;
  return usd;
}

function usdtoeuro(usd) {
  let euros = usd / 1.09;
  return euros;
}

function usdtorupee(rs) {
  let rp = rs * 83.18;
  return rp;
}

function rupeetousd(rup) {
  let r = rup / 83.18;
  return r;
}

function convert1() {
  let money = input1.value;
  let selectedOptionValue1 = option1.value;
  let selectedOptionValue2 = option2.value;

  if (selectedOptionValue1 == "E" && selectedOptionValue2 == "E") {
    input2.value = money;
  } else if (selectedOptionValue1 == "E" && selectedOptionValue2 == "R") {
    let er = eurotorupee(money);
    input2.value = er;
  } else if (selectedOptionValue1 == "E" && selectedOptionValue2 == "U") {
    let us = eurotousd(money);
    input2.value = us;
  } else if (selectedOptionValue1 == "U" && selectedOptionValue2 == "U") {
    input2.value = money;
  } else if (selectedOptionValue1 == "U" && selectedOptionValue2 == "E") {
    let eu = usdtoeuro(money);
    input2.value = eu;
  } else if (selectedOptionValue1 == "U" && selectedOptionValue2 == "R") {
    let ru = usdtorupee(money);
    input2.value = ru;
  } else if (selectedOptionValue1 == "R" && selectedOptionValue2 == "R") {
    input2.value = money;
  } else if (selectedOptionValue1 == "R" && selectedOptionValue2 == "E") {
    let re = rupeetoeuro(money);
    input2.value = re;
  } else if (selectedOptionValue1 == "R" && selectedOptionValue2 == "U") {
    let ur = rupeetousd(money);
    input2.value = ur;
  }
}

function convert2() {
  let money = input2.value;
  let selectedOptionValue1 = option1.value;
  let selectedOptionValue2 = option2.value;

  if (selectedOptionValue2 == "E" && selectedOptionValue1 == "E") {
    input1.value = money;
  } else if (selectedOptionValue2 == "E" && selectedOptionValue1 == "R") {
    let er = eurotorupee(money);
    input1.value = er;
  } else if (selectedOptionValue2 == "E" && selectedOptionValue1 == "U") {
    let us = eurotousd(money);
    input1.value = us;
  } else if (selectedOptionValue2 == "U" && selectedOptionValue1 == "U") {
    input1.value = money;
  } else if (selectedOptionValue2 == "U" && selectedOptionValue1 == "E") {
    let eu = usdtoeuro(money);
    input1.value = eu;
  } else if (selectedOptionValue2 == "U" && selectedOptionValue1 == "R") {
    let ru = usdtorupee(money);
    input1.value = ru;
  } else if (selectedOptionValue2 == "R" && selectedOptionValue1 == "R") {
    input1.value = money;
  } else if (selectedOptionValue2 == "R" && selectedOptionValue1 == "E") {
    let re = rupeetoeuro(money);
    input1.value = re;
  } else if (selectedOptionValue2 == "R" && selectedOptionValue1 == "U") {
    let ur = rupeetousd(money);
    input1.value = ur;
  }
}
