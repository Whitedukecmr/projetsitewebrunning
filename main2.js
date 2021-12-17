const cookieStorage = document.querySelector(".cookie-container");
const cookieBtn = document.querySelector(".btn-cookie");

cookieBtn.addEventListener("click", () => {
  cookieStorage.classList.remove("active");
  localStorage.setItem("consentPropertyName", "false");
});

setTimeout(() => {
  if (!localStorage.getItem("consentPropertyName")) {
    cookieStorage.classList.add("active");
  }
}, 2000);