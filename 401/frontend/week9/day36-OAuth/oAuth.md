
- Students will be able to add google OAuth to a MERN stack application.
- oAuth
  - lab: figure out what you need to put in the backend to use oAuth. simple front end, be able to make requests to backend.

- OAuth:
  - 1st- original gets a code after the google sign up on their page. Gets you a code!
  - 2nd handshake from backend of client- takes client ID and the gogole code that was provided in adddiotn to the secret key. Send off to google again. And return all of the users info in additon to a token. This can be used to make an object in the original. Gets you a token!

- passport.js (can choose which strategy you want to use- facebok auth, google auth)
