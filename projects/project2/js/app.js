// carousel
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 2000;
let timeAutoNext = 15000;

nextDom.onclick = function () {
  showSlider('next');
}

prevDom.onclick = function () {
  showSlider('prev');
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext)
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
  let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

  if (type === 'next') {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add('next');
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add('prev');
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext)
}
//carousel

//form
document.addEventListener('DOMContentLoaded', function () {
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  function validatePhone(tel) {
    const re = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
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

  if (!form) return console.error("Formularul (#formular) nu a fost găsit în DOM.");
  if (!document.getElementById("myModal")) {
    console.error("Modalul (#myModal) nu a fost găsit în DOM. Verifică ID-ul și structura modalului.");
  }

  let myModal = null;
  try {
    const modalEl = document.getElementById("myModal");
    myModal = bootstrap.Modal.getOrCreateInstance(modalEl);
  } catch (err) {
    console.error("Eroare la inițializarea Bootstrap Modal:", err);
  }

  console.log("Bootstrap modal instance:", myModal);

  if (nameField) {
    nameField.addEventListener("input", function () {
      nameError.textContent = nameField.value.trim() === "" ? "Numele este obligatoriu." : "";
    });
  }
  if (nameField2) {
    nameField2.addEventListener("input", function () {
      nameError2.textContent = nameField2.value.trim() === "" ? "Prenumele este obligatoriu." : "";
    });
  }
  if (emailField) {
    emailField.addEventListener("input", function () {
      const v = emailField.value.trim();
      emailError.textContent = v === "" ? "Emailul este obligatoriu." : (!validateEmail(v) ? "Emailul nu este valid." : "");
    });
  }
  if (phoneField) {
    phoneField.addEventListener("input", function () {
      const v = phoneField.value.trim();
      phoneError.textContent = v === "" ? "Numărul de telefon este obligatoriu." : (!validatePhone(v) ? "Numărul de telefon nu este valid." : "");
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    const nameValue = nameField ? nameField.value.trim() : "";
    const nameValue2 = nameField2 ? nameField2.value.trim() : "";
    const phoneValue = phoneField ? phoneField.value.trim() : "";
    const emailValue = emailField ? emailField.value.trim() : "";

    if (nameValue === "") { nameError.textContent = "Numele este obligatoriu."; isValid = false; }
    if (nameValue2 === "") { nameError2.textContent = "Prenumele este obligatoriu."; isValid = false; }
    if (emailValue === "") { emailError.textContent = "Emailul este obligatoriu."; isValid = false; }
    else if (!validateEmail(emailValue)) { emailError.textContent = "Emailul nu este valid."; isValid = false; }
    if (phoneValue === "") { phoneError.textContent = "Numărul de telefon este obligatoriu."; isValid = false; }
    else if (!validatePhone(phoneValue)) { phoneError.textContent = "Numărul de telefon nu este valid."; isValid = false; }

    if (isValid) {
      if (myModal && typeof myModal.show === 'function') {
        myModal.show();
      } else {
        console.error("Modalul nu este inițializat corect (myModal este null sau nu are metoda show).");
      }
    }
  });
});

//form

//phone copy
var w = screen.width;
if (w > 768) {
    function myFunction() {
        var copyText = "+40723994420";
        navigator.clipboard.writeText(copyText);
        alert("Numărul de telefon a fost copiat.");
    }
}
//phone copy