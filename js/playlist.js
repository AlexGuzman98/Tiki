/* eslint-disable arrow-parens */
const url = 'https://tiki-music.herokuapp.com/favorite/6100bbcdec3538f60593b5b2';
// ${id}

function playlist() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.data[0].songs);
      const arr = data.data[0].songs;
      console.log(arr);
      arr.forEach(element => {
        fetch(`https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/${element}`)
          .then((response) => response.json())
          .then((data) => {
            // console.log(data);
            const favoriteTab = document.querySelector('#tab-5 ul');
            for (let i = 0; i < data.length; i += 1) {
              const favoriteContent = document.createElement('li');
              favoriteTab.appendChild(favoriteContent);
              favoriteContent.innerHTML = `

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
