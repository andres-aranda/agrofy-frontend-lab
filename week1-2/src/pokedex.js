let pokemones = [];
let fav = [];
//carga api
const carga = () => {
  let pokemon;
  for (let i = 1; i < 5; i++) {
    let i = 1;
    let ficha = [];
    let url = 'https://pokeapi.co/api/v2/pokemon/' + i;
    fetch(url)
      .then((rta) => rta.json())
      .then(myJson => {
        ficha.push(myJson.id, myJson.sprites.back_default, myJson.name, myJson.types, false);
        pokemones.push(ficha);
      })
      .then(actualiza())
      .then(showPokemones(pokemones))
      .catch(err => console.log('No funca ' + err));
  }
}
//add favorite
const addfav = (favId) => {

  if (favId.textContent == 'Add to fav') {
    favId.textContent = 'Remove';
    favId.className = 'added';
    fav.push = (favId.id);
  } else {
  favId.textContent = 'Add to fav';
    favId.className = 'btn';
    let m = fav.indexOf(favId.id);
    if (m !== -1) {
      arr.splice(m, 1);
    }
  }
};


//actualiza estado
const actualiza = () => {
  for (let i = 0; i < 151; i++) {
    for (let j = 0; i < fav.length + 1; j++) {
      if (pokemones[i][0] == fav[j]) {
        pokemones[true]
      }
    }
  }
}


const statusFav = (idPoke) => {

}
//mostrar poquemones    
const showPokemones = (mostrar) => {
  mostrar.map(pokemon => createDiv(pokemon));
}
//Crea el div   
const createDiv = poke => {
  let types = "Types: ";
  const tipos = () => {
    for (let i = 0; i < poke[3].length; i++) {
      types += poke[3][i] + " ";
    }
  };
  const div = document.createElement('div');
  div.className = 'pokemonInfo';
  if (poke[4]) {
    div.innerHTML = `
          <div class="pokemonInfoBody">
            <img src=${poke[1]}>
            <p>${poke[2]}</p>
            <p>${types}</p>
            <button class="added" id="${poke[0]}">
              Remove
            </buton>
          </div>
        `;
  } else {
    div.innerHTML = `
          <div class="pokemonInfoBody">
            <img src=${poke[1]}>
            <p>${poke[2]}</p>
            <p>${types}</p>
            <button class="Add to fav" id="${poke[0]}">
              Remove
            </buton>
          </div>
        `;
  }

  return document.getElementById('pokemonData').appendChild(div);
};
//buscar poquemones
buscar = (pal) => {
  let largo;
  let coincide = [];
  largo = pal.length;
  for (let i = 0; i < 150;) {
    if (pokemones[i][2].substr(0, largo) == pal) {
      coincide.push(pokemones[i])
    }
  } return coincide;
}
//limpiar pantalla
limpiar = () => { document.getElementById('pokemonData').removeChild(div); }

ingresobusqueda = () => {
  let p = document.getElementById('buscar').value;
  limpiar();
  showPokemones(buscar(p));
}
carga();
