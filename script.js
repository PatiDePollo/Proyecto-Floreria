document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = new FormData(this);
  fetch('enviar_mail.php', {
    method: 'POST',
    body: form
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById('respuesta').innerText = data;
    this.reset(); // Limpia el formulario
  })
  .catch(error => {
    document.getElementById('respuesta').innerText = 'Error al enviar el mensaje.';
    console.error('Error:', error);
  });
});
