const darkTheme = document.getElementById('styles-css');
const lightTheme = document.getElementById('light-theme-css');
const themeToggle = document.getElementById('theme-toggle');

function setTheme(isDark) {
    darkTheme.disabled = !isDark;
    lightTheme.disabled = isDark;
    localStorage.setItem('darkTheme', isDark);
    themeToggle.checked = isDark;
}

function toggleTheme() {
    setTheme(!darkTheme.disabled);
}

export function initThemeSwitch() {
    const prefersDark = localStorage.getItem('darkTheme') !== 'false';
    setTheme(prefersDark);

    themeToggle.addEventListener('change', toggleTheme);

    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
            setTheme(e.matches);
        });
    }
}