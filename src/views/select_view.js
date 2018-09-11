const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(selectElement){
    this.selectElement = selectElement;
}

SelectView.prototype.bindEvents = function(){
    PubSub.subscribe('MusicalInstruments:all-instruments-ready', (event)=>{
        const allInstruments = event.detail;
        this.populateMenu(allInstruments);
    });

    this.selectElement.addEventListener('change', (event)=>{
        const selectedIndex = event.target.value;
        PubSub.publish('SelectView:change', selectedIndex);
    });
}

SelectView.prototype.populateMenu = function(allInstruments){
    console.log(allInstruments);
    allInstruments.forEach((instrument, index)=>{
        const option = document.createElement('option');
        option.textContent = instrument.name;
        option.value = index;
        this.selectElement.appendChild(option);
    });
}

module.exports = SelectView;