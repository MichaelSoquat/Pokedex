// VARIABLE

let currentPokemon;
let allPokemons = [];
// LOAD POKEMON 

async function loadPokemon() { //asynchrone Funktion; lade Pokemon von API
    document.getElementById('pokedex').innerHTML = ``;
    for (let i = 0; i <= 15; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i+1}`; //lade von URL
        let response = await fetch(url); //beziehe Daten von URL
        currentPokemon = await response.json(); //wandle Text in Json um
        allPokemons.push(currentPokemon);
        console.log('Loaded Pokemon', currentPokemon);
        renderPokemonInfo(i);
    }
}

// RENDER

function renderPokemonInfo(i) {
    let type2 = allPokemons[i].types[1];
    let id;

    if (type2) {
        type2 = allPokemons[i].types[1].type.name[0].toUpperCase() + allPokemons[i].types[1].type.name.substring(1);

    }
    else {
        type2 = ``;
    }

    if (allPokemons[i].id > 9) {
        id = '0' + allPokemons[i].id;
    }
    if (allPokemons[i].id < 10) {
        id = '00' + allPokemons[i].id;
    }
    if (allPokemons[i].id > 99) {
        id = allPokemons[i].id;
    }

    document.getElementById('pokedex').innerHTML += `<div id="card${id}" class="pokemonContainer"><span class="styleid">${`#` + id}</span>
    <span class="centerName">${allPokemons[i]['species']['name'][0].toUpperCase() + allPokemons[i]['species']['name'].substring(1)}</span>
    <img class="pics" src="${allPokemons[i].sprites.front_shiny}"><div id="spaceBetweenType" class="typeSpaceBetween"><div class="styleType">${allPokemons[i].types[0].type.name[0].toUpperCase() + allPokemons[i].types[0].type.name.substring(1)}</div>
    <div id="${allPokemons[i].id}" class="d-none styleType">${type2}</div></div></div>`;

    checkIfSecondType(type2);
    // backgroundColor(id);

}

// // CHECK SECOND TYPE

function checkIfSecondType(type2) {
    if (type2) {
        document.getElementById(`${currentPokemon.id}`).classList.remove(`d-none`);
    }
}
// // GIVE EXACT BG COLOR

// function backgroundColor(id) {
//     if (id.types[0].type.name === 'grass' || 'bug' || 'poison') {
//         document.getElementById(`card${id.id}`).classList.add('bgGreen');
//     }

//     if (id.types[0].type.name === 'fire') {
//         document.getElementById(`card${id.id}`).classList.add('bgRed');
//     }

//     if (id.types[0].type.name[0].toUpperCase() + id.types[0].type.name.substring(1) === 'Water') {
//         document.getElementById(`card${id.id}`).classList.add('bgBlue');
//     }

//     if (id.types[0].type.name[0].toUpperCase() + id.types[0].type.name.substring(1) === 'Electric') {
//         document.getElementById(`card${id.id}`).classList.add('bgYellow');
//     }

//     if (id.types[0].type.name[0].toUpperCase() + id.types[0].type.name.substring(1) === 'Normal') {
//         document.getElementById(`card${id.id}`).classList.add('bgGrey');
//     }

//     if (id.types[0].type.name[0].toUpperCase() + id.types[0].type.name.substring(1) === 'Fairy') {
//         document.getElementById(`card${id.id}`).classList.add('bgGrey');
//     }

//     if (id.types[0].type.name[0].toUpperCase() + id.types[0].type.name.substring(1) === 'Ground') {
//         document.getElementById(`card${id.id}`).classList.add('bgBrown');
//     }

//     if (id.types[0].type.name[0].toUpperCase() + id.types[0].type.name.substring(1) === 'Fighting') {
//         document.getElementById(`card${id.id}`).classList.add('bgBrown');
//     }

//     if (id.types[0].type.name[0].toUpperCase() + id.types[0].type.name.substring(1) === 'Rock') {
//         document.getElementById(`card${id.id}`).classList.add('bgBrown');
//     }

//     if (id.types[0].type.name[0].toUpperCase() + id.types[0].type.name.substring(1) === 'Psychic') {
//         document.getElementById(`card${id.id}`).classList.add('bgPurple');
//     }

//     if (id.types[0].type.name[0].toUpperCase() + id.types[0].type.name.substring(1) === 'Ghost') {
//         document.getElementById(`card${id.id}`).classList.add('bgPurple');
//     }
// }

// // SEARCH POKEMON

// function searchForPokemon() {
//     let searchPokemon = document.getElementById('searchPokemon').value;
//     document.getElementById('pokedex').innerHTML = ``;
//     for (let i = 0; i <= 15; i++) {

//         if (allPokemons[i]['species']['name'].toLowerCase().startsWith(searchPokemon.toLowerCase())) {
//             document.getElementById('pokedex').innerHTML += `<div id="card${allPokemons[i].id}" class="pokemonContainer"><span class="styleid">${`#` + allPokemons[i].id}</span>
//             <span class="centerName">${allPokemons[i]['species']['name'][0].toUpperCase() + allPokemons[i]['species']['name'].substring(1)}</span>
//             <img class="pics" src="${allPokemons[i].sprites.front_shiny}"><div id="spaceBetweenType" class="typeSpaceBetween"><div class="styleType">${allPokemons[i].types[0].type.name[0].toUpperCase() + allPokemons[i].types[0].type.name.substring(1)}</div>
//             <div id="${allPokemons[i].id}" class="d-none styleType"></div></div></div>`;
//         }
        
        
//     }
// }
