// const submit = document.getElementById('username-submit');
//         const input = document.getElementById('username-input');
//         const display = document.getElementById('username-display');

//         const oldUsername = localStorage.getItem('username');
//         display.textContent = oldUsername ? oldUsername : '(not set)';

//         function setUsername() {
//           const newUsername = input.value;
//           localStorage.setItem('username', newUsername);
//           display.textContent = newUsername;
//         }

        submit.addEventListener('click', setUsername);

const button = document.getElementById('hello-inline');

        button.addEventListener('click', () => {
          const h1 = document.createElement('h1');
          h1.textContent = 'Hello World!';
          document.body.appendChild(h1);
        });
