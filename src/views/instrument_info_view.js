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
    this.container.innerHTML = "";
    this.createElements();
    this.addTextToElements(instrumentFamilyToShow);
    this.addElementsToContainer();
};

InstrumentInfoView.prototype.createElements = function(){
    this.headingElement = document.createElement('h2');
    this.paragraphElement = document.createElement('p');
    this.smallHeadingElement = document.createElement('h3');
    this.unorderedListElement = document.createElement('ul');
};

InstrumentInfoView.prototype.addTextToElements = function(instrumentFamilyToShow){
    this.headingElement.textContent = instrumentFamilyToShow.name;
    this.paragraphElement.textContent = instrumentFamilyToShow.description;
    this.smallHeadingElement.textContent = "Instruments include:";
    for(let instrument of instrumentFamilyToShow.instruments){
        const listElement = document.createElement('li');
        listElement.textContent = instrument;
        this.unorderedListElement.appendChild(listElement);
    };
};

InstrumentInfoView.prototype.addElementsToContainer = function(){
    this.container.appendChild(this.headingElement);
    this.container.appendChild(this.paragraphElement);
    this.container.appendChild(this.smallHeadingElement);
    this.container.appendChild(this.unorderedListElement);
}

module.exports = InstrumentInfoView;