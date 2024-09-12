// Contact form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Log the input (you can replace this with an email API or backend integration)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    alert('Message Sent Successfully!');
    
    // Clear form
    document.getElementById('contact-form').reset();
});
