const notificationElement = document.createElement('div');
document.body.appendChild(notificationElement);

notificationElement.style.position = 'fixed';
notificationElement.style.bottom = '20px';
notificationElement.style.left = '50%';
notificationElement.style.transform = 'translateX(-50%)';
notificationElement.style.padding = '10px 20px';
notificationElement.style.borderRadius = '5px';
notificationElement.style.fontWeight = 'bold';
notificationElement.style.display = 'none';

function showNotification(message, type) {
  notificationElement.innerText = message; 
  notificationElement.style.display = 'block'; 

  if (type === 'error') {
    notificationElement.style.backgroundColor = 'red';
    notificationElement.style.color = 'white';
  } else if (type === 'warning') {
    notificationElement.style.backgroundColor = 'orange';
    notificationElement.style.color = 'black';
  } else {
    notificationElement.style.backgroundColor = 'green';
    notificationElement.style.color = 'white';
  }
}

function hideNotification() {
  notificationElement.style.display = 'none'; 
}

function checkNetworkStatus() {
  const controller = new AbortController(); 
  const timeout = setTimeout(() => {
    controller.abort(); 
  }, 1000);

  const startTime = Date.now();

  fetch('https://sb-film.skillbox.cc/ping', { method: 'POST', signal: controller.signal })
    .then((response) => {
      clearTimeout(timeout); 
      const duration = Date.now() - startTime; 

      if (response.ok) {
        if (duration > 500) {
          showNotification('Медленное соединение', 'warning'); 
        } else {
          hideNotification(); 
        }
      }
    })
    .catch((error) => {
      if (error.name === 'AbortError') {
        showNotification('Неполадки с сетью', 'error'); 
      } else {
        showNotification('Неполадки с сетью', 'error'); 
      }
    });
}

setInterval(checkNetworkStatus, 5000);
