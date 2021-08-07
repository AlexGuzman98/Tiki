/* eslint-disable arrow-parens */
const url = 'https://tiki-music.herokuapp.com/recently-played/610dce509df4c800049a8e3b';

function recentlyPlayed() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const arr = data.data.songs;
      arr.forEach(element => {
        fetch(`https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/${element}`)
          .then((response) => response.json())
          .then((dataSongs) => {
            const recentlyPlayedTab = document.querySelector('#tab-2 ul');
            const recentlyPlayedContent = document.createElement('li');
            recentlyPlayedTab.appendChild(recentlyPlayedContent);
            recentlyPlayedContent.innerHTML += `  
              <img src="${dataSongs.image}" alt="${dataSongs.name} cover">
              <h2>${dataSongs.name}</h2>
              <p class="description_artist">${dataSongs.album}</p>
              <audio src="${dataSongs.audio}"></audio>
          `;
          });
      });
    });
}

recentlyPlayed();
