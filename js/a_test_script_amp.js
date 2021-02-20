const button = document.getElementById('hello-url');

button.addEventListener('click', () => {
  const h1 = document.createElement('h1');
  h1.textContent = 'Hello 1488 World!';
  document.body.appendChild(h1);
});

const {calculateHash} = require('./lib/calculateHash');

module.exports = {calculateHash};

