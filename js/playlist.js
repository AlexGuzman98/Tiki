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
        console.log(element);
        fetch(`https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/song/${element}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      });
    });
}

playlist();
