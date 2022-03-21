"use strict";
const sorting = require("../index");
// Print all entries, across all of the *async* sources, in chronological order.

module.exports = (logSources, printer) => {
  return Promise.all(logSources.map(item => item.popAsync()))
  .then((logs) => {
    const sorted = sorting(logs);
    sorted.forEach(item_1 => printer.print(item_1));
    console.log('Async process done');
    printer.done();
    return;
  });
};
