document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = new FormData(this);
  fetch('https://panchosrv.bringfeel.com.ar/florencioelias/7mo3ra/Moyano/php/enviar_mail.php', {
    method: 'POST',
    body: form
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById('respuesta').innerText = data;
    this.reset();
  })
  .catch(error => {
    document.getElementById('respuesta').innerText = 'Error al enviar el mensaje.';
    console.error('Error:', error);
  });
});
