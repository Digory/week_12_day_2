const SelectView = require('./views/select_view.js');
const MusicalInstruments = require('./models/musical_instruments.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('#instrument-families');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const musicalInstruments = new MusicalInstruments();
  musicalInstruments.bindEvents();
  
  const instrumentDisplayElement = document.querySelector('#display-info');
  const instrumentInfoView = new InstrumentInfoView(instrumentDisplayElement);
  instrumentInfoView.bindEvents();
});
