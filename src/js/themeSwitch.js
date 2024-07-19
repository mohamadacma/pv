const darkTheme = document.getElementById('styles-css');
const lightTheme = document.getElementById('light-theme-css');
const themeToggle = document.getElementById('theme-toggle');

function setTheme(isDark) {
    darkTheme.disabled = !isDark;
    lightTheme.disabled = isDark;
    localStorage.setItem('darkTheme', isDark);
    themeToggle.checked = isDark;
    document.body.classList.toggle('light-mode', !isDark);
    const sunIcon = document.querySelector('.sun-icon');
        const moonIcon = document.querySelector('.moon-icon');

        if (isDark) {
            sunIcon.style.color = '#555';
            moonIcon.style.color = '#f5f3ce';
        } else {
            sunIcon.style.color = '#f9d71c';
            moonIcon.style.color = '#555';
        }
    }

function toggleTheme() {
    setTheme(themeToggle.checked);
}

export function initThemeSwitch() {
    const prefersDark = localStorage.getItem('darkTheme') === 'true';
    setTheme(prefersDark);

    themeToggle.addEventListener('change', toggleTheme);

    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
            setTheme(e.matches);
        });
    }
}