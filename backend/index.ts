const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

path.join(__dirname, "..", "frontend", "dist");
app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
});

app.listen(process.env.PORT || port, () => {
  console.log(`app listening on port ${process.env.PORT || port}`);
});
