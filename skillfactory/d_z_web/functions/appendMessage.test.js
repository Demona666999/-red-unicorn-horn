import { appendMessageToContainer } from './appendMessage';

describe('appendMessageToContainer', () => {
  let container;

 beforeEach(() => {
  container = document.createElement('div');
  container.style.height = '100px'; 
  container.scrollTop = 0;
});

  test('должен добавлять сообщение в контейнер', () => {
    appendMessageToContainer(container, 'Привет');
    expect(container.innerHTML).toContain('Привет');
  });

  test('должен увеличивать scrollTop до scrollHeight', () => {
    appendMessageToContainer(container, 'Скролл');
    expect(container.scrollTop).toBe(container.scrollHeight);
  });

  test('можно вставлять HTML в сообщение', () => {
    appendMessageToContainer(container, '<b>Жирный</b>');
    expect(container.querySelector('b')).not.toBeNull();
  });
});