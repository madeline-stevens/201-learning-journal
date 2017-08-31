'use strict';

const debug = require('debug')('http:parse-url');//second parens...is when to run.
const urlParse = require('url').parse //don't need to require in the whole file. We only need the parse method.
const queryParse = require('querystring').parse


module.exports = function(req) { //we would not expect a reject case in this scenario
  //debut('#parse-url')
  req.url = urlParse(req.url)
  req.url.query = queryParse(req.url.query)
  return Promise.resolve(req)
}
