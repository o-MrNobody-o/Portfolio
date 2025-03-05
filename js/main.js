function toggleMode() {
    const body = document.body;
    const button = document.querySelector('.toggle-btn');

    // Toggle class
    body.classList.toggle('dark-mode');

    // Change button text
    if (body.classList.contains('dark-mode')) {
        button.textContent = '☀️ Light Mode';
    } else {
        button.textContent = '🌙 Dark Mode';
    }

    // Save mode preference in local storage
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Check user preference on page load
window.onload = function () {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.toggle-btn').textContent = '☀️ Light Mode';
    }
};

