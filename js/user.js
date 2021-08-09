function user() {
  fetch('https://tiki-music.herokuapp.com/user/610dce509df4c800049a8e3b')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('user_name').innerHTML = `Welcome ${data.data.name}`;
    });
}

user();
