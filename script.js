const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const EmailInput = document.querySelector("#email-input");
const PassInput = document.querySelector("#password-input");

const submitBtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-invalid");
  firstNameInput.classList.remove("is-valid");
};
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-invalid");
  lastNameInput.classList.remove("is-valid");
};
EmailInput.onkeyup = () => {
  EmailInput.classList.remove("is-invalid");
  EmailInput.classList.remove("is-valid");
};
PassInput.onkeyup = () => {
  PassInput.classList.remove("is-invalid");
  PassInput.classList.remove("is-valid");
};

submitBtn.onclick = () => {
  let Correctpart = 0;
  let isFirstNameOk = false;
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
    Correctpart += 1;
  }
  let islastNameOk = false;
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    islastNameOk = true;
    Correctpart += 1;
  }

  let EmailOk = false;
  if (validateEmail(EmailInput.value)) {
    EmailInput.classList.add("is-valid");
    Correctpart += 1;
    EmailOk = true;
  } else {
    EmailInput.classList.add("is-invalid");
  }

  let PassOk = false;
  if (PassInput.value.length < 6) {
    PassInput.classList.add("is-invalid");
  } else {
    PassInput.classList.add("is-valid");
    PassOk = true;
    Correctpart += 1;
  }

  if (Correctpart === 4) {
    alert("Registed Successfully!");
  }
};
