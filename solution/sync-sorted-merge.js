"use strict";
const sorting = require("../index");
// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {
  const logs = logSources.map((item) => item.pop());
  const sorted = sorting(logs);
  sorted.forEach((item) => printer.print(item));
  console.log('Sync process done');
  printer.done();
  return;
};
