var plantillaPokemon =  '<ul>'+
                        '<li >Altura: __altura__</li>'+
                        '<li>Experiencia: __experiencia__</li>'+
                        '</ul>'

var cargarPagina = function () {
    cargarPokemones();
    $(document).on("click", ".pokemon", entrarAPokemon);
     
};

var cargarPokemones = function () {
    var url = 'https://pokeapi.co/api/v2/pokemon/';
   $.getJSON(url, function(response){
       var pokemons = response.results;
       mostrarPokemones(pokemons);
   })
};

var mostrarPokemones = function (pokemons) {
    var $contenedorPokemones = $("#contenedorPokemon")
    pokemons.forEach(function (pokemon) {
        var $div = $("<div />");
        $div.addClass("pokemon");
        $div.text(pokemon.name);
        $div.attr("data-url", pokemon.url);
        $contenedorPokemones.append($div);
})
}

var entrarAPokemon = function(){
     var url = ($(this).data("url"));
     console.log(url)
     $.getJSON(url,function(response){
         console.log("dentro", response)
     })
       
}


    

$(document).ready(cargarPagina);