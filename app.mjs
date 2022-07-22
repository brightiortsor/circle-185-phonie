//  document.getElementById("phone").addEventListener('blur', validatePhone);
document.getElementById("btn-now").addEventListener('click', clickNow);

// function validatePhone(){  
//   const phone = document.getElementById("phone");
//     const re = /^[0]([7-9]{1})[0]([365728])?\d{7}$/;

//     Pattern for MTN carrier: 0703, 0706, 0803, 0806, 0903, 0906
//     Pattern for GLO carrier: 0705, 0707, 0805, 0807, 0905, 0907
//     Pattern for Airtel carrier: 0702, 0708, 0802, 0808, 0902, 0908
//     Anything outside of these patterns throws an error message

//     if(!re.test(phone.value)){
//         const errorMessage = document.getElementById('invalid')
//         errorMessage.textContent = "Enter a valid carrier number"
//         errorMessage.style.color = "red"
//     } else {
//         const errorMessage = document.getElementById('invalid')
//         errorMessage.textContent = ""
//     }
// }

function clickNow() {
  alert("Congratulations, you've successfully booked an appointment!");
}



// I WORKED WITH THOSE DATA YOU GAVE ABOVE,  then i  added some other data
 document.getElementById("phone").addEventListener('blur', myFunction); 
function myFunction() {
  const phone = document.getElementById("phone").value;
  const mtn =  /^[0]([7-9]{1})([0,1]{1})([0,3,2,4,6]{1})\d{7}$/;
  const GLO =  /^[0]([7-9]{1})[0,1]([1,5,7]{1})\d{7}$/; 
  const Airtel = /^[0]([7-9]{1})[0]([2,8]{1})\d{7}$/;

  if(mtn.test(phone)){
  const logo = document.getElementById("logo")
  logo.innerHTML = 'MTN';
  logo.style.visibility = 'visible';
  } else if(GLO.test(phone)){
    const logo = document.getElementById("logo")
    logo.innerHTML = 'GLO';
    logo.style.visibility = 'visible';
   } else if(Airtel.test(phone)){
    const logo = document.getElementById("logo")
    logo.innerHTML = 'AIRTEL';
    logo.style.visibility = 'visible';
   } else if ( mtn.test(phone) !== true || GLO.test(phone) !== true || Airtel.test(phone) !== true || phone == "") {
    const logo = document.getElementById("logo")
    logo.innerHTML = 'NULL';
    logo.style.visibility = 'visible';
    logo.style.color='red';
  }
  
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