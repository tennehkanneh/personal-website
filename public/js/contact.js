const form = document.querySelector('form');

function sendEmail() {
    // Script sourced from https://smtpjs.com/ 
    Email.send({
        Host : "s1.maildns.net",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}