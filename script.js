//PRENDE L'ID DEL PULSANTE HTML
const toggleThemeBtn = document.getElementById('toggle-theme-btn');

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    }else {
        document.body.classList.remove('dark-theme');
    }
}


function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme)
}


//Carica il tema il local storage

const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Imposta l'evento di click per il pulsante

toggleThemeBtn.addEventListener('click', toggleTheme);