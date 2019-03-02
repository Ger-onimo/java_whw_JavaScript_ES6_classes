const PubSub = require('../helpers/pub_sub.js');

// 1. refactored class syntax
class InstrumentFamilies{
  constructor(data){
  this.data = data;
  }

// 2. refactored method syntax
bindEvents () {
  PubSub.publish('InstrumentFamilies:data-ready', this.data);

  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishFamilyDetail(selectedIndex);
  });
};

}
// end

// 1. Replace with class syntax
//const InstrumentFamilies = function (data) {
//  this.data = data;
//};

// 2. Replace with method syntax
//InstrumentFamilies.prototype.bindEvents = function () {
//  PubSub.publish('InstrumentFamilies:data-ready', this.data);
//
//  PubSub.subscribe('SelectView:change', (evt) => {
//    const selectedIndex = evt.detail;
//    this.publishFamilyDetail(selectedIndex);
//  });
//};

InstrumentFamilies.prototype.publishFamilyDetail = function (selectedIndex) {
  const selectedFamily = this.data[selectedIndex];
  PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
};



module.exports = InstrumentFamilies;
