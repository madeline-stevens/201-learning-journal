

const index = require('../index.js')//bringing in your file to be tested. we will need to export something in index.js so that it can be read here in the test file.

describe ('ModuleName', function(){
  describe('defualt properties', () =>  {
    test('should have...', () => {
      expect(true).toBeTrue 
    })
  })
  describe...//2:20
})









describe('index.js', function(){
  test('default properties', ()=> {
    expect(index.name).toEqual('Katherine')//index is an object being imported into this test.
  })
})
