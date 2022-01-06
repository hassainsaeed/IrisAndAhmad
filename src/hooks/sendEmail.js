import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm('service_uze8tqr', 'template_qj4k6vq', e.target, 'user_74wIxCZMS1T9C11SblsfO')
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}

export default sendEmail;
