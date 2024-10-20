// Initialize EmailJS with your user ID
// const serviceID = "service_58hm9a5";
// const templateID = "template_xqhmvcc";
// const userID = "BzngGgGJl4wDRZqPf";


(function() {
    emailjs.init("BzngGgGJl4wDRZqPf"); // Replace with your EmailJS user ID
})();

document.getElementById('submitForm').addEventListener('click', function() {
        // Get form element
        const form = document.getElementById('contactForm');

        // Collect form data
        const formData = {
            name: form.querySelector('input[name="name"]').value,
            phone: form.querySelector('input[name="phone"]').value,
            email: form.querySelector('input[name="email"]').value,
        };

        // Send email using EmailJS
        emailjs.send("service_58hm9a5", "template_xqhmvcc", formData)
        .then(function(response) {
            alert('Form submitted successfully!');
            form.reset();
        }, function(error) {
            alert('There was a problem submitting the form: ' + JSON.stringify(error));
        });

});
