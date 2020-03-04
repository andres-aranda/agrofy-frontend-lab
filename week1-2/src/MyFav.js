
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
  }).catch(err => console.log('No funca ' + err));
};
//add favorite
const a = (favId) => {

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
if (poke.flag){
    let types = "Types: ";
  const tipos = () => {
    for (let i = 0; i < poke.types.length; i++) {
      types += poke.types[i].type.name + " ";
    }
  };
  tipos();
  const div = document.createElement('div');
  div.className = 'pokemonInfo';
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

  return document.getElementById('pokemonData').appendChild(div);
}};

//clean screen
limpiar = () => {
  document.getElementById('pokemonData').innerHTML = "";
}

//guardar
const guardar = () =>{
  localStorage.setItem("fav",fav);
}

carga();