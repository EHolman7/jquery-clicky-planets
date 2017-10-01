"use strict";

const planets = require('./planets');

$('#showButton').mouseover(() => {
	//all the planets to show
	//console.log(planets.getPlanets());
	createDomString(planets.getPlanets());
});

const createDomString = (planetz) => {
	 var planetString = '';
    for(var i=0; i<planetz.length; i++){
        var newPlanet = "";
        newPlanet+=`<div class="planetBox"  id="planetBox-${i}">`;
        newPlanet+=`<div class="planetName hidden">${planetz[i].name}</div>`;
        newPlanet+=`<img class="planetImage" src="${planetz[i].url}">`;
        newPlanet+= `</div>`;
        planetString += newPlanet;
    }
    printToDom(planetString);
};

const printToDom = (string) => {
	$('#planetHolder').html(string);
};

$('body').on('click', '.planetImage', (event) => {
	console.log(event);
	$(event.target).prev().removeClass("hidden");
});

$('#clearButton').click(() => {
	let imageInfo = planets.getImageData();
	$('#planetHolder').html(`<h2>${imageInfo.title}</h2>`);
	$('#planetHolder').append(`<p>${imageInfo.explanation}</p>`);
});

$('#searchText').keypress((event) => {
	//console.log(event);
	if(event.key === 'Enter'){
		//console.log($('#searchText').val());
		let txt = $('#searchText').val();
		let planetData = planets.getPlanets();
        let results = planetData.filter(function(thing){
            return thing.name.indexOf(txt)>-1;
	 	});
	createDomString(results);
	$('.planetName').removeClass('hidden');
	}
});

module.exports = {};