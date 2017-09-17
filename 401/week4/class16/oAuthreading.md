# Difference between Basic Authorization and Open Authorization:

Basic OAuth: https://www.youtube.com/watch?v=CPbvxxslDTU

Bearer: https://www.youtube.com/watch?v=fpV7yp-TXFk&t=17s

Basic Authorization and OAuth: http://apiux.com/2013/07/10/oauth-2-trumps-basic-authentication/



Basic--
Cons:
- The entirety of the username and password are passed in on each request.
- No access tokens. Managing an API program without access tokens can provide you with less control.

Pros:
- The transmission of credentials is encrypted over SSL, and use of the “Authorization” header is ubiquitous in HTTP clients and systems.



OAuth--
Cons:
- More complex than basic authentication...but worth it.

Pros:
- Access tokens!
- More secure.
