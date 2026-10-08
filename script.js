document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for "Request Service"
    const requestButton = document.querySelector('header .button');
    
    if (requestButton) {
        requestButton.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = requestButton.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // 2. Interactive Form Processing Action
    const contactForm = document.getElementById('requestForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop standard browser page refresh
            
            // Gather input field metrics
            const userName = document.getElementById('name').value;
            
            // Display clean confirmation success alert directly inside the panel container
            contactForm.innerHTML = `
                <div style="text-align: center; padding: 20px; color: #2f6f6d;">
                    <h3 style="margin-top: 0;">Thank you, ${userName}!</h3>
                    <p>Your request has been received. We will review your document needs and get back to you with pricing details shortly.</p>
                </div>
            `;
        });
    }
});
