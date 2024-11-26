function loadLanguage(lang) {
    fetch(`/translations/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('pageTitle').innerText = data.pageTitle;
            document.getElementById('menuAbout').innerText = data.menu.about;
            document.getElementById('menuProjects').innerText = data.menu.projects;
            document.getElementById('menuContact').innerText = data.menu.contact;
            document.getElementById('sectionAbout').innerText = data.sections.about.title;
            document.getElementById('aboutContent').innerText = data.sections.about.content;
            document.getElementById('sectionProjects').innerText = data.sections.projects.title;
            document.getElementById('sectionContact').innerText = data.sections.contact.title;
            document.getElementById('contactContent').innerText = data.sections.contact.content;
            document.getElementById('copyrightContent').innerText = data.sections.copyright.content;
        })
        .catch(error => console.error('Error loading language:', error));
}

function changeLanguage(lang) {
    loadLanguage(lang);
    localStorage.setItem('language', lang);
}

const savedLanguage = localStorage.getItem('language');

if (!savedLanguage) {
    localStorage.setItem('language', 'en');
}

loadLanguage(savedLanguage || 'en');

const languageSelect = document.getElementById('languageSelect');
if (languageSelect) {
    languageSelect.value = savedLanguage || 'en';
}

if (languageSelect) {
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = languageSelect.value;
        changeLanguage(selectedLanguage);
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}

document.getElementById('menuAbout').addEventListener('click', function() {
    scrollToSection('about');
});

document.getElementById('menuProjects').addEventListener('click', function() {
    scrollToSection('projects');
});

document.getElementById('menuContact').addEventListener('click', function() {
    scrollToSection('contact');
});

document.getElementById("currentYear").innerText = new Date().getFullYear();