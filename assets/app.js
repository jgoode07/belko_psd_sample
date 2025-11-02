const menuToggle = document.querySelector('.menu-toggle');
const navModal = document.getElementById('navModal');
const closeBtn = document.querySelector('.close-btn');

menuToggle.addEventListener('click', () => {
    navModal.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    navModal.classList.remove('open');
});

// Close on Outside Click
navModal.addEventListener('click', (e) => {
    if (e.target === navModal) {
        navModal.classList.remove('open');
    }
});
