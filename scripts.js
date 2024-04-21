<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.auto-position');

    function positionElements() {
        elements.forEach(element => {
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;
            const elementHeight = element.offsetHeight;
            const elementWidth = element.offsetWidth;

            element.style.top = `${windowHeight - elementHeight}px`;
            element.style.left = `${windowWidth - elementWidth}px`;
        });
    }

    positionElements();

    window.addEventListener('resize', positionElements);
});
=======
// Function to load language data from JSON file
function loadLanguage(lang) {
    fetch(`translations/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            // Update page content with translated text
            document.getElementById('pageTitle').innerText = data.pageTitle;
            document.getElementById('menuAbout').innerText = data.menu.about;
            document.getElementById('menuCertificates').innerText = data.menu.certificates;
            document.getElementById('menuProjects').innerText = data.menu.projects;
            document.getElementById('menuContact').innerText = data.menu.contact;
            document.getElementById('sectionAbout').innerText = data.sections.about.title;
            document.getElementById('aboutContent').innerText = data.sections.about.content;
            document.getElementById('sectionCertificates').innerText = data.sections.certificates.title;
            document.getElementById('sectionProjects').innerText = data.sections.projects.title;
            document.getElementById('projectsContent').innerText = data.sections.projects.content;
            document.getElementById('sectionContact').innerText = data.sections.contact.title;
            document.getElementById('contactContent').innerText = data.sections.contact.content;
            document.getElementById('copyrightContent').innerText = data.sections.copyright.content;
            // Update other sections similarly
        })
        .catch(error => console.error('Error loading language:', error));
}

// Function to change language and save preference
function changeLanguage(lang) {
    loadLanguage(lang);
    localStorage.setItem('language', lang);
}

// Check if language preference is saved in localStorage
const savedLanguage = localStorage.getItem('language');

// If language preference is not saved, set default language to English ("en")
if (!savedLanguage) {
    localStorage.setItem('language', 'en');
}

// Load language based on saved preference
loadLanguage(savedLanguage || 'en'); // Default to English if no preference is saved

// Set selected language in the language dropdown
const languageSelect = document.getElementById('languageSelect');
if (languageSelect) {
    languageSelect.value = savedLanguage || 'en';
}

// Listen for changes in language selection
if (languageSelect) {
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = languageSelect.value;
        changeLanguage(selectedLanguage);
    });
}

// Funkcja do płynnego przewijania do danej sekcji
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth' // Ustawienie płynnego przewijania
        });
    }
}

// Obsługa kliknięcia na przyciskach sekcji
document.getElementById('menuAbout').addEventListener('click', function() {
    scrollToSection('about');
});

document.getElementById('menuCertificates').addEventListener('click', function() {
    scrollToSection('certificates');
});

document.getElementById('menuProjects').addEventListener('click', function() {
    scrollToSection('projects');
});

document.getElementById('menuContact').addEventListener('click', function() {
    scrollToSection('contact');
});

// Ustawienie aktualnego roku w elemencie o id="currentYear"
document.getElementById("currentYear").innerText = new Date().getFullYear();
>>>>>>> 8d66e60 (A)
