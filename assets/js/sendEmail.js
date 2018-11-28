function sendEmail(contactForm) {
    emailjs.send("gmail", "resume_contact_email", {
            "ejs_dashboard__test_template": true,
            "from_name": contactForm.name.value,
            "resume_request": contactForm.projectsummary.value,
            "from_email": contactForm.emailaddress.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("ERROR, error");
            }
        );
};
