const body = document.body;
const getLocalStor = (key) => localStorage.getItem(key);
const setLocalStor = (key, val) => localStorage.setItem(key, val);
const removeLocalStor = (key) => localStorage.removeItem(key);

const swithThemeRef = document.getElementById('theme-switch-toggle');
swithThemeRef.addEventListener('change', checkTheme);

if (getLocalStor('theme') && getLocalStor('theme') === 'dark-theme') {
    swithThemeRef.checked = true;
    setDarkTheme();
} 

function checkTheme() {
    if (swithThemeRef.checked) {
        setDarkTheme();
    } else {
        unsetDarkTheme();
    }
}

function setDarkTheme() {
    body.classList.add('dark-theme');
    setLocalStor('theme', 'dark-theme');
}

function unsetDarkTheme() {
    body.classList.remove('dark-theme');
    removeLocalStor('theme');
}