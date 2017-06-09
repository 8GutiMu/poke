$.getJSON( "http://pokeapi.co/api/v2/pokemon/", function( response ) {
    var pokemons = response.results;
    crearPokemons(pokemons)
});

 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

function crearPokemons(pokemons) {
	var contenedor = document.getElementById("contenedorPokemon");

	pokemons.forEach(function (pokemon) {
        var div = document.createElement("div");
        var img= document.createElement("img")
		var p = document.createElement("p");
		
        p.textContent = pokemon.name;
        div.data("poke"+pokemon.name) = pokemon""
        console.log(pokemon.url)
      
       
        
        img.src="https://dummyimage.com/150x150/000/fff"
		div.appendChild(img);
        div.appendChild(p);
        
        contenedor.appendChild(div)
        
//        div.addEventListener("click",mostrar)
	});
}

var pokeInd = function(){
    $.getJSON( "http://pokeapi.co/api/v2/pokemon/1/", function( response ) {
    var pokemon = response.results;
    console.log(pokemon)
});
}

pokeInd()