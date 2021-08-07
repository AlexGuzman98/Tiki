/* eslint-disable arrow-parens */

function favorite() {
  fetch('https://tiki-music.herokuapp.com/favorite/610dce509df4c800049a8e3b')
    .then((response) => response.json())
    .then((dataUser) => {
      const arr = dataUser.data[0].songs;
      arr.forEach(element => {
        fetch(`https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/${element}`)
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            const favoriteTab = document.querySelector('#tab-5 ul');
            const favoriteContent = document.createElement('li');
            favoriteTab.appendChild(favoriteContent);
            favoriteContent.innerHTML += `
              
                <img src="${data.image}" alt="${data.name} cover">
                <h2>${data.name}</h2>
                <p class="description_artist">${data.album}</p>
                <audio src="${data.audio}"></audio>
            
              `;
          });
      });
    });
}

favorite();
