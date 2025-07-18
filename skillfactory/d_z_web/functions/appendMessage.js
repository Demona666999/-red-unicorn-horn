export function appendMessageToContainer(container, message) {
  const msg = document.createElement('div');
  msg.innerHTML = message;
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}