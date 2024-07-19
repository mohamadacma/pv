

// Get references to the theme stylesheets and toggle switch
const darkTheme = document.getElementById('styles-css');
const lightTheme = document.getElementById('light-theme-css');
const themeToggle = document.getElementById('theme-toggle');

// Function to set the theme
function setTheme(isDark) {
    darkTheme.disabled = !isDark;
    lightTheme.disabled = isDark;
    localStorage.setItem('darkTheme', isDark);
    themeToggle.checked = isDark;
}

// Function to toggle the theme
function toggleTheme() {
    setTheme(!darkTheme.disabled);
}

// Initialize the theme based on user's previous preference or default to dark theme
function initTheme() {
    const prefersDark = localStorage.getItem('darkTheme') !== 'false'; // Default to true if not set
    setTheme(prefersDark);
}

// Event listener for the theme toggle switch
themeToggle.addEventListener('change', toggleTheme);

// Initialize the theme when the script loads
initTheme();

// Optional: Listen for system theme changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
        setTheme(e.matches);
    });
}
window.toggleTheme = toggleTheme;