/* eslint-disable no-shadow */
const formCreate = document.getElementById('create');
const login = document.getElementById('login');
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

async function loginUser(user) {
  const link = await fetch('https://tiki-music.herokuapp.com/user/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(user),
  })

    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  return link;
}
login.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailUser = formCreate.elements[1].value;
  const passwords = formCreate.elements[2].value;
  const user = {
    email: emailUser,
    password: passwords,
  };
  const data = loginUser(user);
  window.location.href = 'home.html';

  console.log(data);
});

formCreate.addEventListener('submit', (e) => {
  e.preventDefault();
  formChecker(email.value, password.value, password2.value, userName.value);
  email.value = '';
  password.value = '';
  password2.value = '';
  userName.value = '';
});
