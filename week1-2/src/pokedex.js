let pokemones = [];
let fav =   localStorage.getItem("fav") && localStorage.getItem("fav").split(",") || [];



//carga api
const carga = () => {
  let promises = [];
  for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(res => res.json()));
  }
  Promise.all(promises).then(myJson => {
    pokemones = myJson.map(myJson => ({
      id: myJson.id,
      image: myJson.sprites.front_default,
      name: myJson.name,
      types: myJson.types,
      flag: fav && fav.length && fav.find(item=>item == myJson.id)
      }
     
    ));
   showPokemones(pokemones);
   
   let prueba = JSON.parse(localStorage.getItem("pokemones"));
   
  }).catch(err => console.log('No funca ' + err));
};
//add favorite
const a = (favId) => {
  console.log(favId.textContent);
  if (favId.textContent == 'Add to fav') {
    favId.textContent = 'Remove';
    favId.className = 'added';
    fav.push(favId.id);
    guardar();
  } else {
    favId.textContent = 'Add to fav';
    favId.className = 'btn';
    fav = fav.filter(id=>id != favId.id) ;
    guardar();
  }
};

//mostrar poquemones  

const showPokemones = (mostrar) => {
  limpiar();
  mostrar.map(pokemon => createDiv(pokemon));
}
//Crea el div   
const createDiv = poke => {
  let types = "Types: ";
  const tipos = () => {
    for (let i = 0; i < poke.types.length; i++) {
      types += poke.types[i].type.name + " ";
    }
  };
  tipos();
  const div = document.createElement('div');
  div.className = 'pokemonInfo';
  if (poke.flag) {
    div.innerHTML = `
          <div class="pokemonInfoBody">
            <img src=${poke.image}>
            <p>${poke.name}</p>
            <p>${types}</p>
            <button class="added" id="${poke.id}" onclick="a(this)">
              Remove
            </buton>
          </div>
        `;
  } else {
    div.innerHTML = `
          <div class="pokemonInfoBody">
            <img src=${poke.image}>
            <p>${poke.name}</p>
            <p>${types}</p>
            <button class="btn" id="${poke.id}" onclick="a(this)">
            Add to fav
            </buton>
          </div>
        `;
  }
  return document.getElementById('pokemonData').appendChild(div);
};
limpiar = () => {
  document.getElementById('pokemonData').innerHTML = "";
}
//buscar poquemones
buscar = (pal) => {
  let coincide;
  if (pal.length) {
    coincide = pokemones.filter(poke => poke.name.includes(pal))
    return coincide;
  } else { return pokemones; }

}
//guardar
const guardar = () =>{
  localStorage.setItem("fav",fav);
}

// buscar en array pokemon


ingresobusqueda = () => {
  let palabra = document.getElementById('buscar').value;
  showPokemones(buscar(palabra));
}
const test = (a) => {
  console.log(a.textContent);
}
carga();