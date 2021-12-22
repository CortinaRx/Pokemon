const div$$ = document.querySelector(".container");
const ol$$ = document.querySelector("#pokedex");
const input$$ = document.querySelector('.finder');
const btn$$ = document.querySelector('.btn');
const olSearch$$ = document.querySelector("#searchPoke");
const allPoke = [];



const arrayBueno = () => {
    

    

    for (let i = 1; i <= 151; i++) {
        const baseDatos = `https://pokeapi.co/api/v2/pokemon/${i}`;
        allPoke.push(fetch(baseDatos).then(res => res.json()));

    }

    Promise.all(allPoke).then(results => {
        const pokemon = results.map(data => ({
            name: data.name,
            image: data.sprites.other["dream_world"]["front_default"],
            id: data.id,
            type: data.types[0].type.name,
            weight : data.weight,
        }));
        print(pokemon);
    })
    
}


const print = (pokemon) => {
    for (const poke of pokemon) {
        const li$$ = document.createElement('li');
        li$$.innerHTML =
        `<h2 class="pokeName">${poke.name}</h2>
        <div class="divCards"><img src="${poke.image}" class="image"/></div>
        <p>ID: ${poke.id}</p>
        <p>Tipo: ${poke.type.toUpperCase()}</p>
        <p>Peso: ${poke.weight/10} Kg</p>`
        ol$$.appendChild(li$$);        
    } 
    btn$$.addEventListener("click", () => {search(pokemon)});    
}

const search = (pokemon) => {
    console.log(pokemon) ; 
    const finderPoke = pokemon.filter( poke => 
    poke.name.includes(input$$.value.toLowerCase()));                
    console.log(finderPoke);
    for (let index = 0; index < finderPoke.length; index++) {
        const poke = finderPoke[index];
        const li$$ = document.createElement('li');
        li$$.innerHTML =
        `<h2 class="pokeName1">${poke.name}</h2>
        <div class="divCards1"><img src="${poke.image}" class="image"/></div>
        <p class="pclass">ID: ${poke.id}</p>
        <p class="pclass">Tipo: ${poke.type.toUpperCase()}</p>
        <p class="pclass">Peso: ${poke.weight/10} Kg</p>`
        olSearch$$.appendChild(li$$);        
    }
    
    
    
}

arrayBueno();
