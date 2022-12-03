/*jshint esversion: 6 */
// Source code: https://github.com/Code-Institute-Solutions/InteractiveFrontendDevelopment-Resume/blob/master/03-SendingEmailsUsingEmailJS/06-sending_emails/assets/js/sendEmail.js
function sendMail(contactForm) {

    emailjs.send("phlopping_gmail_service", "gc-site", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.message.value,
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                console.log('Email sent successfully! response.status: ', response.status);
                redirectPage();
            },
            function(error) {
                console.log("Email failed to send");
                console.log("FAILED", error);
                window.location.href = "contact.html";
                alert("Email couldn't be sent. Please check your internet connection and try again!");
            }
        );
    // To block from loading a new page
    return false;
}

function redirectPage() {
    console.log("redirectPage function called");
    // alert('Email sent Successfully');
    window.location.href = "success.html";
}