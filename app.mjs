
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('btn-now').addEventListener('click', clickNow);

function validatePhone(){
    const phone = document.getElementById('phone');
    const re = /^[0]([7-9]{1})[0]([365728])?\d{7}$/;

    // Pattern for MTN carrier: 0703, 0706, 0803, 0806, 0903, 0906
    // Pattern for GLO carrier: 0705, 0707, 0805, 0807, 0905, 0907
    // Pattern for Airtel carrier: 0702, 0708, 0802, 0808, 0902, 0908
    // Anything outside of these patterns throws an error message

    if(!re.test(phone.value)){
        const errorMessage = document.getElementById('invalid')
        errorMessage.textContent = "Enter a valid carrier number"
        errorMessage.style.color = "red"
    } else {
        const errorMessage = document.getElementById('invalid')
        errorMessage.textContent = ""
    }
}

function clickNow() {
  alert("Congratulations");
}

function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!

  };


  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //