function sendMail(contactForm) {
  emailjs.send("phlopping_gmail_service", "gc-site", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "message": contactForm.message.value,
  })
  .then(
      function(response) {
          console.log("SUCCESS", response);
      },
      function(error) {
          console.log("FAILED", error);
      }
  );
  return false;  // To block from loading a new page
}
// console.log("email.js loaded");
// console.log("before sendMail() call");
// function sendMail(contactForm) {
//   emailjs.send("phlopping_gmail_service", "gc-site", {
//       from_name: contactForm.name.value,
//       from_email: contactForm.emailaddress.value,
//       message: contactForm.message.value,
//     })
//     .then(function (response) {
//       console.log("SUCCESS. Mail sent succesfully! status=%d, text=%s", response.status, response.text);
//     }, function (err) {
//       console.log("FAILED. error=", err);
//     });
// };