document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission
    document.getElementById('responseMessage').innerText = `Thank you, ${name}! Your message has been received.`;
    
    // Clear the form fields
    this.reset();
});

