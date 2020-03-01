let pokemones = [];
//carga api
const carga = () => {
    let pokemon;
  for (let i = 1; i < 5; i++){
       let i=1;
       let ficha= [];
        let url= 'https://pokeapi.co/api/v2/pokemon/' + i ;
        fetch(url)
        .then((rta) => rta.json())
        .then(myJson => { 
        ficha.push(myJson.id , myJson.sprites.back_default , myJson.name, myJson.types, false );
        pokemones.push(ficha);
        })
        .catch(err => console.log('No funca ' + err));
    }
   }


//mostrar poquemones    
const showPokemones = (mostrar) => {
    mostrar.map(pokemon => createDiv(pokemon));
}
 //Crea el div   
    const createDiv = poke => { 
        let types= "Types: ";
        const tipos = () => {
            for (let i = 0 ; i < poke[3].length ; i++){
                types += poke[3][i] + " ";
            }
        };
        const div = document.createElement('div');
        div.className = 'pokemonInfo';
        div.innerHTML = `
          <div class="pokemonInfoBody">
            <img src=${poke[1]}>
            <p>${poke[2]}</p>
            <p>${types}</p>
            <button class="btn">
              add fav
            </buton>
          </div>
        `;
      
        return document.getElementById('pokemonData').appendChild(div);
      };
//buscar poquemones
buscar = (pal) => {
  let largo;
  let coincide= [];
  largo=pal.length;
  for(let i=0; i< 150;){  
      if (pokemones[i][2].substr(0,largo)==pal){
        coincide.push(pokemones[i])}
  } return coincide;
}
//limpiar pantalla
limpiar = () =>{ document.getElementById('pokemonData').removeChild(div);}

ingresobusqueda = () => {
      let p = document.getElementById('buscar').value;
      limpiar();
      showPokemones( buscar(p));
}
 carga();
 