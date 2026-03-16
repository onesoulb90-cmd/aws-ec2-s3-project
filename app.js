const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("AWS EC2 and S3 Web Hosting Project Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
