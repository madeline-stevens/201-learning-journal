express middleware

1. middlware has a strict signature:

Middleware is invoked with a request, a response and next.

module.exports = function (req, res, next) {

};

2. Must call next in every piece of middleware! Or respond to each request. 
