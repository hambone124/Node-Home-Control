const app = require("express")(),
  os = require("os"),
  path = require("path"),
  hc = require("./homecontrol.js"),
  ip = os.networkInterfaces().eth0[0].address;

app.get("/", (req, res) => {
  let index = path.join(__dirname + "/index.html");
  console.log(index);
  res.sendFile(index);
});

app.post("/toggleTvLight", (req, res) => {
  hc.toggleTvLight();
  res.redirect("/");
});

app.listen(4000, ip, () => {
  console.log(`Home Control server listening on ${ip}`);
});