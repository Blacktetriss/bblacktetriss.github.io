const button = document.getElementById('hello-url');

button.addEventListener('click', () => {
  const h1 = document.createElement('h1');
  h1.textContent = 'Hello FUCK 2 World!';
  document.body.appendChild(h1);
});

