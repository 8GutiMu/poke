var cargarPagina = function () {
    cargarPokemones();
    $(document).on("click", ".pokemon", mostrarPokemon);
    
};

var cargarPokemones = function () {
    var url = 'https://pokeapi.co/api/v2/pokemon-species/';
    $.getJSON(url, function (response) {
        var pokemons = response.results;
        mostrarPokemones(pokemons);
    })
};

var mostrarPokemones = function (pokemons) {
    var $contenedorPokemones = $("#contenedorPokemon")
    pokemons.forEach(function (pokemon) {
        var $div = $("<div />");
        var $img = $("<img src='https://dummyimage.com/150/000/fff'>")
        $div.addClass("pokemon");
        $div.text((pokemon.name).toUpperCase());
        $div.attr("data-url", pokemon.url);
        
        $contenedorPokemones.append($img);
        $contenedorPokemones.append($div);
    })
    
}

var mostrarPokemon = function () {
    var url = ($(this).data("url"));
    console.log(url)
    $.getJSON(url, function (response) {
        $("#nombre_modal").html("<h6><strong>Color: </strong>" + response.color.name + "</h6>");
        $("#habitad_modal").html("<h6><strong>Habitad: </strong>" + response.habitat.name + "</h6>");
        $("#shape_modal").html("<h6><strong>Forma: </strong>" + response.shape.name + "</h6>")
        $("#genera_modal").html("<h6><strong>Genera: </strong>" + response.genera[0].genus + "</h6>");
    })
}




$(document).ready(cargarPagina);
