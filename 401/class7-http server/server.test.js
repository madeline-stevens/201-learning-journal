

const servercosnt
const superagent
//don't forget to npm install superagent

describe('POST method, /echo endpoint', ()=> {
  test('should....')

}
)

describe('POST method, /echo endpoint', ()=> {
  test('should....')
    superagent.post('localhost:3000/echo')
      .send({'value': 'scott-is-awesome'})//need whenver you're making a put or a post request
      .set('Content-Type', 'application/json')
      .type('application/json')
      .end((err, res) => {
        expect(err).toBeNull()
        expect(rest).toBe(200)
        done()
    }
  test('should respond with user input', done => {
    superagent.post('localhost:3000/echo')
    .send({'value': 'scott'})
  })
}
)

//GET

describe('GET method, /time endpoint', () => {
  test('shoudl return a status code of 200', done =>
    superagent.get('locahost:3000')
  )
}
)

test('shoudl respons with the current date', done =>
  superagent.get('localhost:3000/time')
    .type('application')
)
