/* eslint-disable no-shadow */
const formCreate = document.getElementById('create');
const userName = document.querySelectorAll('input')[2];
const email = document.querySelectorAll('input')[3];
const password = document.querySelectorAll('input')[4];
const password2 = document.querySelectorAll('input')[5];

function createUser(userInfo) {
  fetch('https://tiki-music.herokuapp.com/user', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(userInfo),
  })
    .then((response) => response.json());
  alert('Usuario Agregado');
}
function formChecker(email, password, password2, name) {
  fetch('https://tiki-music.herokuapp.com/users', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i <= data.data.length; i += 1) {
        if (email.value === data.data[i].email) {
          console.log('the Email is already in use');
          break;
        } else if (password !== password2) {
          console.log("the password doesn't match");
          break;
        } else if (email !== data.data[i].email && password === password2) {
          const userInfo = {
            name: `${name}`,
            email: `${email}`,
            password: `${password}`,
          };
          createUser(userInfo);
          break;
        }
      }
    });
}

formCreate.addEventListener('submit', (e) => {
  e.preventDefault();
  formChecker(email.value, password.value, password2.value, userName.value);
  email.value = '';
  password.value = '';
  password2.value = '';
  userName.value = '';
});
