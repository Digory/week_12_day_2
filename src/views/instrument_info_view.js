const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
    this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){
    PubSub.subscribe('MusicalInstruments:clicked-instrument-ready', (event)=>{
        const instrumentFamilyToShow = event.detail;
        this.display(instrumentFamilyToShow);
    });
};

InstrumentInfoView.prototype.display = function(instrumentFamilyToShow){
    const headingElement = document.createElement('h2');
    const paragraphElement = document.createElement('p');
    const smallHeadingElement = document.createElement('h3');
    const unorderedListElement = document.createElement('ul');
    this.container.innerHTML = "";
    headingElement.textContent = instrumentFamilyToShow.name;
    paragraphElement.textContent = instrumentFamilyToShow.description;
    smallHeadingElement.textContent = "Instruments include:";
    for(let instrument of instrumentFamilyToShow.instruments){
        const listElement = document.createElement('li');
        listElement.textContent = instrument;
        unorderedListElement.appendChild(listElement);
    };
    this.container.appendChild(headingElement);
    this.container.appendChild(paragraphElement);
    this.container.appendChild(smallHeadingElement);
    this.container.appendChild(unorderedListElement);
};

module.exports = InstrumentInfoView;