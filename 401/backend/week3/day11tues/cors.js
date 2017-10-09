

module.exports = function(req, res, next) {
  res.append('Allow-Access-Control-Origin', '*');
  rest.append('Allow-Access-Control-Headers', '*');
  //mutation! we've reassigned, or provided a whitelist of who can interact with our server. * = everybody.
  next();
};

//dont' need constructors for 200 and 400 becuase there are prebuilt error objects in the express docs!!!!
