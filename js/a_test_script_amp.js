const button = document.getElementById('hello-url');

button.addEventListener('click', () => {
  const h1 = document.createElement('h1');
  h1.textContent = 'Hello 14888 World!';
  document.body.appendChild(h1);
});

const {calculateHash} = require('./lib/calculateHash');

module.exports = {calculateHash};

