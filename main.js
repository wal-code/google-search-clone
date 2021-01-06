const themeButton = document.getElementById("themeButton");
const theme = localStorage.getItem("theme");

document.addEventListener("DOMContentLoaded", () => {
  let themeAssign = theme ? theme : "light";
  assignTheme(themeAssign);
});

themeButton.addEventListener("click", () => {
  let themeNow = document.documentElement.getAttribute("data-theme");
  let themeAssign = themeNow === "dark" ? "light" : "dark";
  assignTheme(themeAssign);
});

const assignTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};
