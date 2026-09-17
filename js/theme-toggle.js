
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themes = ["light", "dark", "spirit"];
let currentTheme = "light";
function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  // Change the icon
  if (theme === "light") {
    themeIcon.textContent = "☀️";
  } 
  else if (theme === "dark") {
    themeIcon.textContent = "🌙";
  } 
  else if (theme === "spirit") {
    themeIcon.textContent = "🐆";
  }
}
function setTimeBasedTheme() {

  const now = new Date();

  const hour = now.getHours();

  if (hour >= 19 || hour < 7) {
    setTheme("dark");
  }

  else {
    setTheme("light");
  }
}
themeToggle.addEventListener("click", function(event) {

  event.preventDefault();

  let currentIndex = themes.indexOf(currentTheme);

  let nextIndex = (currentIndex + 1) % themes.length;
  setTheme(themes[nextIndex]);
});

setTimeBasedTheme();
