function user() {
  fetch('https://tiki-music.herokuapp.com/user/610dce509df4c800049a8e3b')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      document.getElementById("user_name").innerHTML = `${data.data.name}`;
    });
}

user();
