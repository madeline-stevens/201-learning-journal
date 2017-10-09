# Class 17- OAuth

- Postman
- Bearer Authorization
- Continuous integration with TravisCI

- Today's lab assumes the user has a token and we can now make galleries for these users. and publish them using an AWS service called S3.
-


MOCKs.JS!!!!!
- const gallery
- mocks.gallery ={}
- line 34- remove gallary- Gallery.remove()

- mocks.gallery.createOne = function() {
  let results = {} //don't need empty object becuase we're assigning the value with the .then line

  return mocks.user.createOne()
  .then(userData => result = userData)
}

- line 39- return new Gallery ){
  name: faker.random.word(),
  desc: faker.random.words(12)
} //returns a Promise

new test file!!!!!
in routes folder
gallery.test.js

describe('Testing Gallery Routes', function(){
  beforeAll
  afterAll
  afterEach
  afterEach

  describe('POST to /api/gallery', function() {
    describe('Valid Requests'), ()=>
      beforeAll() => {
        this.fakerGAlleryData = { name: faker.random.word(), desc: faker.random.words(12) }

        return mocks.user.CcreateIne
        .then(userData => this.userData = userData) //inside userdata is that token we need to be able to make a gallery
        .then(() =>) //take that
          return .... //returning the promise
          .set(.... Bearer ${this.userData.token} //Bearer is similar to what we'v used in the past- we've put Token. Setting a value of our token to our headers
      }
//401 status for both no auth credientials anda req with BAD credentials
    })

  describe('GET to /api/gallery', function() {

    })

  describe('PUT to /api/gallery', function() {

      })
  describe('DELETE to /api/gallery', function() {

        })


  MODEL folder
  - gallery.js
  for the gallery object

  ROUTE
  - route-gallery.js

  module.exports = function (router) {
    router.post('api/gallery', bearerAuth, (req, res)=> {
      debug()




    return new Gallery(req.body).save()
    .then(gallery => res.status(201).json(gallery))
    .catch(err => errorHandler(erro, req, res))
  })

  router.get('api/gallery', (req, res) => {

  })

  router.get('api/gallery', (req, res) => {

  })

  router.put('api/gallery', (req, res) => {

  })

  router.delete('api/gallery', (req, res) => {


LIB!!!!
beare-auth-middleware.js
line 19-  we want this to fail so that it is passed off the error middleware.....
line 25- req.user = user //then handed off ot the callback in ...
