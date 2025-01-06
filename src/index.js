"// Entry point" 
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});
//Newly added
// Get the modal and elements
//const modal = document.getElementById('project-modal');
//const openBtn = document.getElementById('read-more-btn');
//const closeBtn = document.querySelector('.close-btn');

// Open the modal
//openBtn.addEventListener('click', (event) => {
  //event.preventDefault(); // Prevent the default link behavior
  //modal.style.display = 'block';
//});

// Close the modal
//closeBtn.addEventListener('click', () => {
  //modal.style.display = 'none';
//});

// Close modal when clicking outside the content
//window.addEventListener('click', (event) => {
  ///if (event.target === modal) {
    //modal.style.display = 'none';
  //}
//});
//NEW FEATURES ADDED
// Get the elements
const readMoreBtn = document.getElementById('read-more-btn');
const moreInfo = document.getElementById('more-info');

// Toggle the visibility of the additional information
readMoreBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default anchor behavior

    // Toggle the 'hidden' class
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        readMoreBtn.textContent = 'Hide Details'; // Change the button text
    } else {
        moreInfo.classList.add('hidden');
        readMoreBtn.textContent = 'View Details'; // Reset the button text
    }
});
