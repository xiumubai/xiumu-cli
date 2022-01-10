const { RC, DEFAULTS } = require('./constant');
const fs = require('fs');
const { decode, encode } = require('ini');
const { promisify } = require('util');

const exits = promisify(fs.exists);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

exports.getAll = async () => {
  let opts;
  const exit = await exits(RC);
  if (exit) {
    opts = readFile();
    opts = decode(opts);
    return opts;
  }
  return {};
};
