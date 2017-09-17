



//sent as the parsed body so we don't have to....
module...
  router.post...






//parameterized route
//http GET  :3000/api/toy/1234-5678
//req.params._id => 1234-5678 //now we can use this instead of req params....

//or a query string//this is how our vanilla http servers were structured. we won't use this anymore
//...toy?_id=1234-5678
//req.query...
modeule
router.get //id

storage.fetchOne(req.params._id)
.then(toy => res.status(200).json(toy))//can just say... res.json(toy)...
.catch(next)


module...
  router.get
