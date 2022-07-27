// Regex for phone number patterns
const mtnRegex = /^(\+?([\d]{1,3})?[0]?((([7-9]{1})[0]([36]{1}))|([8][1]([0346]{1})))\d{7})$/g,
  etisalatRegex = /^(\+?([\d]{1,3})?[0]?((([8-9]{1})[0]([9]{1}))|(([9]{1})[0]([8]{1}))|([8][1]([78]{1})))\d{7})$/g,
  airtelRegex = /^(\+?([\d]{1,3})?[0]?((([8-9]{1})[0]([2]{1}))|(([7-8]{1})[0]([8]{1}))|(([9]{1})[0]([17]{1}))|([8][1]([2]{1}))|([7][0]([1]{1})))\d{7})$/g,
  gloRegex = /^(\+?([\d]{1,3})?[0]?((([7-9]{1})[0]([57]{1}))|([81]([15]{1})))\d{7})$/g,
  phoneNoInput = document.querySelector("#phone"),
  carrierLogo = document.querySelector(".logo");

// Phone carrier logos
const mtnLogo = '<img src="./images/mtn-logo.jpeg">',
  airtelLogo = '<img src="./images/airtel-logo.jpeg">',
  gloLogo = '<img src="./images/glo-logo.jpg">',
  etisalatLogo = '<img src="./images/9mobile-logo.png">';

function startApp() {
  phoneNoInput.addEventListener("keyup", testNumber)
};

function phoneNumberCheck(regEx, inputValue, logoName) {
  if (regEx.test(inputValue)) {
    carrierLogo.innerHTML = logoName;
    return true
  } else {
    carrierLogo.innerHTML = "";
    return false
  }
}

function testNumber(e) {
  const numInput = e.target.value;
  const carrierDetails = [[etisalatRegex, numInput, etisalatLogo], [mtnRegex, numInput, mtnLogo], [airtelRegex, numInput, airtelLogo], [gloRegex, numInput, gloLogo]]
  for (let i = 0; i < carrierDetails.length; i++) {
    let carrier = carrierDetails[i]
    if (phoneNumberCheck(...carrier)) {
      break
    };
  }
}

  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //