const loginButton = document.getElementById('loginButton');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const backgroundContent = document.getElementById('backgroundContent');

// Show the modal and blur the background content
loginButton.addEventListener('click', function() {
    loginModal.style.display = 'flex';
    backgroundContent.classList.add('blur-background'); // Add blur only to background content
});

// Close the modal and remove the blur effect
closeModal.addEventListener('click', function() {
    loginModal.style.display = 'none';
    backgroundContent.classList.remove('blur-background'); // Remove blur from background
});