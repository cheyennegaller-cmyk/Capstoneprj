// ===== JAGTRACK THEME TOGGLE =====
// This JavaScript adds dark/light mode switching functionality


// This code runs when the page loads
document.addEventListener('DOMContentLoaded', function() {


  // Get the theme toggle button and icon
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');


  // If this page has no navbar toggle, stop here instead of erroring
  if (!themeToggle || !themeIcon) {
    return;
  }


  // Check if user has a saved theme preference in localStorage
  // localStorage saves data in the browser that persists between visits
  const savedTheme = localStorage.getItem('theme');


  // If user previously chose dark mode, apply it
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '🌙';
  }
    else if (savedTheme === 'spirit') {
    document.documentElement.setAttribute('data-theme', 'spirit');
    themeIcon.textContent = '🐆';
  }


  // Listen for clicks on the theme toggle button
  themeToggle.addEventListener('click', function(e) {
    e.preventDefault(); // Prevents the link from navigating


    // Check what theme is currently active
    const currentTheme = document.documentElement.getAttribute('data-theme');


    // Toggle between dark and light
    if (currentTheme === 'dark') {
      // Switch to light mode
      document.documentElement.setAttribute('data-theme', 'light');
      themeIcon.textContent = '☀️';
      localStorage.setItem('theme', 'light');
    } else if (currentTheme === 'spirit') {
      // Switch to dark mode
      document.documentElement.setAttribute('data-theme', 'dark');
      themeIcon.textContent = '🌙';
      localStorage.setItem('theme', 'dark');
    } else {
      // Switch to spirit mode
      document.documentElement.setAttribute('data-theme', 'spirit');
      themeIcon.textContent = '🐆';
      localStorage.setItem('theme', 'spirit');
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




