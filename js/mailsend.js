document.getElementById('submitForm').addEventListener('click', function() {
    const name = document.getElementById('first-name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send("service_52b5dms", "template_3suchrf", {
        user_name: name,
        user_phone: phone,
        user_email: email,
        user_message: message
    }).then(function(response) {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
    }, function(error) {
        alert('Failed to send message, please try again.');
    });
});


document.getElementById('sendConnectEmail').addEventListener('click', function() {
    const email = document.getElementById('connectEmail').value;

    if (email) {
        emailjs.send("service_52b5dms", "template_l1ylycv", {
            user_email: email
        }).then(function(response) {
            alert('Email sent successfully!');
            document.getElementById('connectEmail').value = ""; // Clear input field
        }, function(error) {
            alert('Failed to send email. Please try again.');
        });
    } else {
        alert("Please enter a valid email address.");
    }
});


document.getElementById('sendConnectEmail').addEventListener('click', function() {
    const emailInput = document.getElementById('connectEmail').value;
    if (emailInput) {
        alert("Newsletter coming soon!");
    } else {
        alert("Please enter your email address.");
    }
});
