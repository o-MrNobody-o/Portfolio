const sections = [
  { id: 'Home-Section', navSelector: 'nav a[href="#Home-Section"]' },
  { id: 'Web-App-Section', navSelector: 'nav a[href="#Web-App-Section"]' },
  { id: 'Desktop-App-Section', navSelector: 'nav a[href="#Desktop-App-Section"]' },
  { id: 'Mobile-App-Section', navSelector: 'nav a[href="#Mobile-App-Section"]' },
  { id: 'IOTProjects-Section', navSelector: 'nav a[href="#IOTProjects-Section"]' },
  {id: 'Games-Section', navSelector: 'nav a[href="#Games-Section"]' },
  { id: 'Contact-section', navSelector: 'nav a[href="#Contact-section"]' }
];

sections.forEach(({ id, navSelector }) => {
  const sectionElem = document.getElementById(id);
  const navLink = document.querySelector(navSelector);

  if (sectionElem && navLink) {
    sectionElem.addEventListener('mouseenter', () => {
      navLink.classList.add('active');
    });

    sectionElem.addEventListener('mouseleave', () => {
      navLink.classList.remove('active');
    });
  }
});

document.addEventListener("mousemove", (e) => {
  const eyes = document.querySelectorAll(".eye");

  eyes.forEach((eye) => {
    const pupil = eye.querySelector(".pupil");
    const rect = eye.getBoundingClientRect();

    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
    const distance = Math.min(10, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 10);

    const pupilX = distance * Math.cos(angle);
    const pupilY = distance * Math.sin(angle);

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});

document.querySelectorAll(".eye").forEach((eye) => {
  eye.addEventListener("click", () => {
    eye.classList.add("blink");
    setTimeout(() => {
      eye.classList.remove("blink");
    }, 200); 
  });
});

const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  const root = document.documentElement;
  if (root.getAttribute('data-theme') === 'dark') {
    root.removeAttribute('data-theme');
    toggleBtn.textContent = '🌙'; // moon icon for light mode
  } else {
    root.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '☀️'; // sun icon for dark mode
  }
});

const toggleCheckbox = document.getElementById('theme-toggle');

toggleCheckbox.addEventListener('change', () => {
  const root = document.documentElement;
  if (toggleCheckbox.checked) {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.removeAttribute('data-theme');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  toggleCheckbox.checked = root.getAttribute('data-theme') === 'dark';
});


