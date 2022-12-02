/*jshint esversion: 6 */
// Source code: https://github.com/Code-Institute-Solutions/InteractiveFrontendDevelopment-Resume/blob/master/03-SendingEmailsUsingEmailJS/06-sending_emails/assets/js/sendEmail.js
function sendMail(contactForm) {
    emailjs.send("phlopping_gmail_service", "gc-site", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.message.value,
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                console.log('Email sent successfully! response.status: ', response.status);
                displayModalMailStatus();
            },
            function (error) {
                console.log("Email failed to send");
                console.log("FAILED", error);
            }
        );
    // To block from loading a new page
    return false;
}

function displayModalMailStatus() {
    console.log("displayModalMailStatus function called");
    alert('Email sent Successfully');
}