// const PUBLIC_KEY = '8XKDNSzlw_svug1Gk';
    (function () {
      emailjs.init("8XKDNSzlw_svug1Gk");
      emailjs.send("phlopping_gmail_service", "gc-site", {
        name: "Ioana",
        notes: "Check this out!"
      })
      .then(function(response) {
        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
      }, function(err) {
        console.log("FAILED. error=", err);
      });
    })();