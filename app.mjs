// Regex for phone number patterns
const mtn = /^([+][2][3][4])?[0]?((([7-9]{1})[0]([36]{1}))|([8][1]([0346]{1})))\d{7}$/g,
  etisalat = /^([+][2][3][4])?[0]?((([8-9]{1})[0]([9]{1}))|(([9]{1})[0]([8]{1}))|([8][1]([78]{1})))\d{7}$/g,
  airtel = /^([+][2][3][4])?[0]?((([8-9]{1})[0]([2]{1}))|(([7-8]{1})[0]([8]{1}))|(([9]{1})[0]([17]{1}))|([8][1]([2]{1}))|([7][0]([1]{1})))\d{7}$/g,
 glo = /^([+][2][3][4])?[0]?((([7-9]{1})[0]([57]{1}))|(([8][1][1])|([8][1][5])))\d{7}$/g,
  phoneNumber = document.querySelector("#phone"),
  networkIcon = document.querySelector(".logo");

// Phone carrier icons
const mtnIcon = '<img src="./images/mtn-logo.jpeg">',
  airtelIcon = '<img src="./images/airtel-logo.jpeg">',
  gloIcon = '<img src="./images/glo-logo.jpg">',
  etisalatIcon = '<img src="./images/9mobile-logo.png">';

function startApp() {
  phoneNumber.addEventListener("keyup", verifyNumber);
};

function testPhoneNumber(re, inputValue, iconName) {
  if (re.test(inputValue)) {
    networkIcon.innerHTML = iconName;
    return true
  } else {
    networkIcon.innerHTML = "";
    return false
  }
}

function verifyNumber(e) {
  const phoneInput = e.target.value;
  const networkCarrier = [[etisalat, phoneInput, etisalatIcon], [mtn, phoneInput, mtnIcon], [airtel, phoneInput, airtelIcon], [glo, phoneInput, gloIcon]]
  for (let i = 0; i < networkCarrier.length; i++) {
    let network = networkCarrier[i]
    if (testPhoneNumber(...network)) {
      break
    };
  }
}

  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //