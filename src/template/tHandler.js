const { ZZZ } = require('ebased/handler');
const inputMode = require('ebased/handler/input/'+{YOUR_METHOD});
const outputMode = require('ebased/handler/output/'+{YOUR_METHOD});

const { domain } = require('../domain/XXX');

module.exports.handler = async (events, context) => {
  return ZZZ({ events, context }, inputMode, domain, outputMode);
};
