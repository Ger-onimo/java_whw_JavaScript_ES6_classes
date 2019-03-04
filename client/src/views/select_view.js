//const PubSub = require('../helpers/pub_sub.js');

// refactor pubsub import
import PubSub from '../helpers/pub_sub.js';

// 1. refactored class syntax
class SelectView { // refactored export to app.js
  constructor(element){
  this.element = element;
  }

// 2. refactored method syntax
bindEvents() {
  PubSub.subscribe('InstrumentFamilies:data-ready', (evt) => {
    const allInstrumentFamilies = evt.detail;
    this.populate(allInstrumentFamilies);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

// 3. refactored method syntax
populate(instrumentFamilyData) {
  instrumentFamilyData.forEach((family, index) => {
    const option = document.createElement('option');
    option.textContent = family.name;
    option.value = index;
    this.element.appendChild(option);
  });
};
}

export default SelectView
// end

// 1. Replace with class syntax
//const SelectView = function (element) {
//  this.element = element;
//};

// 2. Replace with method syntax
//SelectView.prototype.bindEvents = function () {
//  PubSub.subscribe('InstrumentFamilies:data-ready', (evt) => {
//    const allInstrumentFamilies = evt.detail;
//    this.populate(allInstrumentFamilies);
//  });
//
//  this.element.addEventListener('change', (evt) => {
//    const selectedIndex = evt.target.value;
//    PubSub.publish('SelectView:change', selectedIndex);
//  });
//};

// 3. Replace with method syntax
//SelectView.prototype.populate = function (instrumentFamilyData) {
//  instrumentFamilyData.forEach((familiy, index) => {
//    const option = document.createElement('option');
//    option.textContent = familiy.name;
//    option.value = index;
//    this.element.appendChild(option);
//  });
//};

//module.exports = SelectView;
