const https = require("https");
const path = require("path");
const fs = require("fs");
const app = require("../app/index.js");

const httpsOptions = {
  key: fs.readFileSync(path.join("/etc/letsencrypt/live/boyo.mn/privkey.pem")),
  cert: fs.readFileSync(path.join("/etc/letsencrypt/live/boyo.mn/cert.pem")),
  ca: fs.readFileSync(path.join("/etc/letsencrypt/live/boyo.mn/fullchain.pem")),
};

app.listen(80, "0.0.0.0", () => console.log(`listening on port ${80}`));

app.use(function (request, response, next) {
  if (process.env.NODE_ENV != "development" && !request.secure) {
    return response.redirect("https://" + request.headers.host + request.url);
  }
  next();
});

https.createServer(httpsOptions, app).listen(443, "0.0.0.0", () => {
  console.log(`LISTENING ON PORT ${443}`);
});