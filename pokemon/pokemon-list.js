axios.get("https://api.vschool.io/pokemon")
    .then(response => {
        const pokemonList = document.getElementById('pokemonList')
        response.data.forEach(pokemon => {
            const h1 = document.createElement('h1')
            h1.textContent = pokemon.name 
            pokemonList.appendChild(h1)
        })
    })
    .catch(error => console.log(error))
