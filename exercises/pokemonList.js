function getPokemonData() {
    axios.get("https://api.vschool.io/pokemon")
        .then(response => {
            console.log(response.data);
            displayPokemonData(response.data.objects[0].pokemon);
        })
        .catch(error => {
            console.error('Something Went Wrong:', error);
        });
}

function displayPokemonData(pokemonArray) {
    const pokemonList = document.getElementById('pokemonList');
    pokemonArray.forEach(pokemon => {
        const h1 = document.createElement('h1');
        h1.textContent = pokemon.name;
        pokemonList.appendChild(h1);
    });
}

getPokemonData();
