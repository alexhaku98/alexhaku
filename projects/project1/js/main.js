function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(tel) {
  const re =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  return re.test(tel);
}

const form = document.getElementById("formular");
const nameField = document.getElementById("name1");
const nameField2 = document.getElementById("name2");
const phoneField = document.getElementById("tel");
const emailField = document.getElementById("email");
const nameError = document.getElementById("errorName1");
const nameError2 = document.getElementById("errorName2");
const phoneError = document.getElementById("errorPhone");
const emailError = document.getElementById("errorEmail");
const myModal = new bootstrap.Modal("#myModal");

nameField.addEventListener("input", function () {
  const nameValue = nameField.value.trim();
  if (nameValue === "") {
    nameError.textContent = "Numele este obligatoriu.";
  } else {
    nameError.textContent = "";
  }
});

nameField2.addEventListener("input", function () {
  const nameValue2 = nameField2.value.trim();
  if (nameValue2 === "") {
    nameError2.textContent = "Prenumele este obligatoriu.";
  } else {
    nameError2.textContent = "";
  }
});

emailField.addEventListener("input", function () {
  const emailValue = emailField.value.trim();
  if (emailValue === "") {
    emailError.textContent = "Emailul este obligatoriu.";
  } else if (!validateEmail(emailValue)) {
    emailError.textContent = "Emailul nu este valid.";
  } else {
    emailError.textContent = "";
  }
});

phoneField.addEventListener("input", function () {
  const phoneValue = phoneField.value.trim();
  if (phoneValue === "") {
    phoneError.textContent = "Numărul de telefon este obligatoriu.";
  } else if (!validatePhone(phoneValue)) {
    phoneError.textContent = "Numărul de telefon nu este valid.";
  } else {
    phoneError.textContent = "";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameValue = nameField.value.trim();
  const nameValue2 = nameField2.value.trim();
  const phoneValue = phoneField.value.trim();
  const emailValue = emailField.value.trim();

  let isValid = true;
  if (nameValue === "") {
    nameError.textContent = "Numele este obligatoriu.";
    isValid = false;
  }
  if (nameValue2 === "") {
    nameError2.textContent = "Prenumele este obligatoriu.";
    isValid = false;
  }
  if (emailValue === "") {
    emailError.textContent = "Emailul este obligatoriu.";
    isValid = false;
  } else if (!validateEmail(emailValue)) {
    emailError.textContent = "Emailul nu este valid.";
    isValid = false;
  }
  if (phoneValue === "") {
    phoneError.textContent = "Numărul de telefon este obligatoriu.";
    isValid = false;
  } else if (!validatePhone(phoneValue)) {
    phoneError.textContent = "Numărul de telefon nu este valid.";
    isValid = false;
  }
  if (isValid) {
    myModal.show();
  }
});
