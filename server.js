const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/search", (req, res) => {
  const options = {
    method: "GET",
    url: "https://country-by-api-ninjas.p.rapidapi.com/v1/country",
    params: { name: req.query.entry },
    headers: {
      "X-RapidAPI-Key": "b8eb4c64d1msh82f4f5538e5065ap1d2b92jsn7113e96b5efb",
      "X-RapidAPI-Host": "country-by-api-ninjas.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000/`);
});
