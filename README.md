# Request Header Parser Microservice

Solution to FreeCodeCamp's [Request Header Parser Microservice][fcc-rhpms] API
project.


## Background

The goal is to use the [Express][expjs] Node.js web framework to create a simple
API service, which should respond to a `/api/whoami` endpoint.

After hitting that endpoint, the service should return information about the
user's data just by parsing the request header sent by browsers when sending a
HTTP request.

The data returned should be like:

* **`ipaddress`**: the IP address the request was originated from.
* **`language`**: the browser's language the user configured.
* **`software`**: the user's OS from browser's user-agent string.


## Deployment

The project should be deployed in [Heroku][hku] because it's easy to use and
free. Also, [Cloud9 IDE][c9] was suggested for use because it already has all
the needed dependencies ready to work with.


## License

This project is under [MIT License](LICENSE.txt).


[fcc-rhpms]: https://www.freecodecamp.com/challenges/request-header-parser-microservice
[expjs]: http://expressjs.com
[hku]: https://www.heroku.com
[c9]: https://c9.io
