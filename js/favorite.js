/* eslint-disable arrow-parens */
const url = 'https://tiki-music.herokuapp.com/favorite/610dce509df4c800049a8e3b';
// ${id}

function playlist() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.data[0].songs);
      const arr = data.data[0].songs;
      // console.log(arr);
      arr.forEach(element => {
        fetch(`https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/${element}`)
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            const favoriteTab = document.querySelector('#tab-5 ul');
            for (let i = 0; i < data.length; i += 1) {
              const favoriteContent = document.createElement('li');
              favoriteTab.appendChild(favoriteContent);
              favoriteContent.innerHTML += `
              <div class"${data[i].name} content">
                <img src="${data[i].image}" alt="${data[i].name} cover">
                <h2>${data[i].name}</h2>
                <p>${data[i].album}</p>
                <audio src="${data[i].audio}" id="audio" crossorigin="anonymous"></audio>
              </div>
              `;
            }
          });
      });
    });
}

playlist();
