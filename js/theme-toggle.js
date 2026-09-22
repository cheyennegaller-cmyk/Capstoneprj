// ===== JAGTRACK THEME TOGGLE =====

document.addEventListener('DOMContentLoaded', function() {

  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  if (!themeToggle || !themeIcon) {
    return;
  }

  // Get saved theme
  const savedTheme = localStorage.getItem('theme');

  // Set saved theme when page loads
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '🌙';
  } 
  else if (savedTheme === 'spirit') {
    document.documentElement.setAttribute('data-theme', 'spirit');
    themeIcon.textContent = '🐆';
  } 
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.textContent = '☀️';
  }

  // Change theme when clicked
  themeToggle.addEventListener('click', function(e) {
    e.preventDefault();

    const currentTheme = document.documentElement.getAttribute('data-theme');

   
    if (currentTheme === 'light' || !currentTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeIcon.textContent = '🌙';
      localStorage.setItem('theme', 'dark');

   
    } 
    else if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'spirit');
      themeIcon.textContent = '🐆';
      localStorage.setItem('theme', 'spirit');

   
    } 
    else {
      document.documentElement.setAttribute('data-theme', 'light');
      themeIcon.textContent = '☀️';
      localStorage.setItem('theme', 'light');
    }
  });

});
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
