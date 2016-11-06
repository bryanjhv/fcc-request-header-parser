var app = require("express")();


function listener(req, res) {
  res.json({
    ipaddress: req.ip,
    language: req.acceptsLanguages()[0],
    software: getOS(req)
  });
}

function getOS(req) {
  var userAgent = req.get('User-Agent');

  if (!userAgent) {
    return 'unknown';
  }

  var reg = /\(([^)]+)\)/;
  var match = userAgent.match(reg)[1];

  if (!match) {
    return 'unknown';
  }

  return match;
}


app.set('trust proxy', true).get("/api/whoami", listener).listen(process.env.PORT);
