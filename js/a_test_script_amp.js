const button = document.getElementById('hello-url');

button.addEventListener('click', () => {
  const h1 = document.createElement('h1');
  h1.textContent = 'Hello World!';
  document.body.appendChild(h1);
});

const button = document.getElementById('hello-url2');

button.addEventListener('click', () => {
  const h1 = document.createElement('h1');
  h1.textContent = 'Hello 21 World!';
  document.body.appendChild(h1);
});

