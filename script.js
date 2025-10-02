function showMessage() {
  alert("You just practiced Git! 🚀");
}

// 🌙 Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-dark");

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});