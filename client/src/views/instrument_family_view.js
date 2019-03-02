const PubSub = require('../helpers/pub_sub.js');

// 1. Replace with class syntax
//const InstrumentFamilyView = function (container) {
//  this.container = container;
//};

// 1. refactored class syntax
class InstrumentFamilyView {
  constructor(container){
  this.container = container;
  }

// 2. refactored method syntax
bindEvents () {
  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {
    const instrumentFamily = evt.detail;
    this.render(instrumentFamily);
  });
};

// 3. refactored method syntax
render(family) {
  this.container.innerHTML = '';

  const familyName = this.createElement('h2', family.name);
  this.container.appendChild(familyName);

  const familyDescription = this.createElement('p', family.description);
  this.container.appendChild(familyDescription);

  const instrumentListTitle = this.createElement('h3', 'Instruments include:');
  this.container.appendChild(instrumentListTitle);

  const instrumentList = this.createInstrumentList(family.instruments);
  this.container.appendChild(instrumentList);
};

// 4. refactored method syntax
createElement (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

// 5. refactored method syntax
createInstrumentList(instruments) {
  const list = document.createElement('ul');

  instruments.forEach((instrument) => {
    const listItem = document.createElement('li');
    listItem.textContent = instrument;
    list.appendChild(listItem);
  });

  return list;
};
}
// end

// 2. Replace with method syntax
//InstrumentFamilyView.prototype.bindEvents = function () {
//  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {
//    const instrumentFamily = evt.detail;
//    this.render(instrumentFamily);
//  });
//};

// 3. Replace with method syntax
//InstrumentFamilyView.prototype.render = function (family) {
//  this.container.innerHTML = '';
//
//  const familyName = this.createElement('h2', family.name);
//  this.container.appendChild(familyName);
//
//  const familyDescription = this.createElement('p', family.description);
//  this.container.appendChild(familyDescription);
//
//  const instrumentListTitle = this.createElement('h3', 'Instruments include:');
//  this.container.appendChild(instrumentListTitle);
//
//  const instrumentList = this.createInstrumentList(family.instruments);
//  this.container.appendChild(instrumentList);
//};

// 4. Replace with method syntax
//InstrumentFamilyView.prototype.createElement = function (elementType, text) {
//  const element = document.createElement(elementType);
//  element.textContent = text;
//  return element;
//};

// 5. Replace with method syntax
//InstrumentFamilyView.prototype.createInstrumentList = function (instruments) {
//  const list = document.createElement('ul');
//
//  instruments.forEach((instrument) => {
//    const listItem = document.createElement('li');
//    listItem.textContent = instrument;
//    list.appendChild(listItem);
//  });
//
//  return list;
//};

module.exports = InstrumentFamilyView;
