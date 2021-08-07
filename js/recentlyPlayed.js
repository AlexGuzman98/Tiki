/* eslint-disable arrow-parens */
// ${id}

function playlist() {
  fetch('https://tiki-music.herokuapp.com/recently-played/610dce509df4c800049a8e3b')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data.songs);
      const arr = data.data[0];
      console.log(arr);
      arr.forEach(element => {
        fetch(`https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/${element}`)
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            const recentlyPlayedTab = document.querySelector('#tab-2 ul');
            for (let i = 0; i < data.length; i += 1) {
              const recentlyPlayedContent = document.createElement('li');
              recentlyPlayedTab.appendChild(recentlyPlayedContent);
              recentlyPlayedContent.innerHTML = `

              <div>
              <h1>Hola</h1>
              </div>

          `;
            }
          });
      });
    });
}

playlist();
