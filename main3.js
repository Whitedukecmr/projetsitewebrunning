const saveStorage = document.querySelector(".cookie-container");
const footerBtn = document.querySelector(".footer-btn");

footerBtn.addEventListener("click", () => {
  saveStorage.classList.remove("active");
  localStorage.setItem("consentFooterName", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("consentFooterName")) {
    saveStorage.classList.add("active");
  }
}, 2000);