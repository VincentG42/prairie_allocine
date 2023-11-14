async function afficherFilms() {
    const reponse = await fetch("http://127.0.0.1:5500/Projet-allo-cine/data/moovies.json");
    const films = await reponse.json();
    console.log(films)
    films.forEach(film => {
       balise.innerHTML+=`
       <div class="flex1">
            <img class="posterfilm" src="${film.Poster}">
            <div class="flex2">
                <h2 class="titrefilm">${film.Title}</h2>
                
                <p class="datedesortie"> ${film.released}/${film.Runtime}/ ${film.Genre}</p>
                <p class="distribution"><span>Avec</span> ${film.Actors}</p>
                <p class="realisateur"> <span>Un film de</span> ${film.Director}, <span>Ecrit par</span> ${film.Writer}</p>
                <p class="synopsys"> ${film.Plot}</p>
                <div class="basdecarte">
                    <p class="notes"> <span>mdbRating:</span> ${film.mdbRating}</p> <p class="notes"><span> Metascore: ${film.Metascore}</span> </p>
                    <div>${film.Metascore === undefined ? vraie : ' '}
                        <img  class="imagesfilm" src="${film.Images[0]}">
                        <img  class="imagesfilm" src="${film.Images[1]}">
                        <img  class="imagesfilm" src="${film.Images[2]}">
                    </div>
                </div>    
            </div>
       </div>
       `
    });
  }

  afficherFilms()


const balise= document.querySelector('.films');


