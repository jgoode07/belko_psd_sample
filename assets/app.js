const menuToggle = document.querySelector('.menu-toggle');
const navModal = document.getElementById('navModal');
const closeBtn = document.querySelector('.close-btn');

menuToggle.addEventListener('click', () => {
    const isOpen = navModal.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
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
