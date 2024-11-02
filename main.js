const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  setInterval(async () => {
    try {
      const a = await fetch("https://pcake.onrender.com/")
      console.log("ping");
    } catch (err) {
      console.log(err)
    }
  }, 15000)

  console.log(`Сервер запущен на порту ${PORT}`);
});
