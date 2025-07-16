//const ws = new WebSocket('wss://echo-ws-service.herokuapp.com'); у меня отвалился и не присылал мне эхо ответы.
const ws = new WebSocket('wss://ws.ifelse.io/'); //другой аналогичный ресурс

const chatWindow = document.getElementById('chatWindow');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const geoBtn = document.getElementById('geoBtn');

let isGeo = false; 

sendBtn.addEventListener('click', () => {
  const message = messageInput.value;
  if (!message) return;

  appendMessage(`Вы: ${message}`);
  ws.send(message);
  messageInput.value = '';
  isGeo = false; 
});

ws.onmessage = (event) => {
  if (!isGeo) {
    appendMessage(`Сервер: ${event.data}`);
  }
};

geoBtn.addEventListener('click', () => {
  if (!navigator.geolocation) {
    appendMessage('Геолокация не поддерживается браузером.');
    return;
  }

  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    const link = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    appendMessage(`Гео: <a href="${link}" target="_blank">Смотреть на карте</a>`);
    ws.send(`Гео-локация: ${latitude},${longitude}`);
    isGeo = true; 
  }, () => {
    appendMessage('Не удалось получить гео-локацию.');
  });
});

function appendMessage(message) {
  const msg = document.createElement('div');
  msg.innerHTML = message;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}