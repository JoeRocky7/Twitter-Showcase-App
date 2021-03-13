const express = require('express');
const server = express();
const axios = require('axios');
const path = require('path');
const dotenv = require("dotenv");
dotenv.config();
let port = process.env.PORT || 3002;
const access_token = process.env.TOKEN;

//middleware
server.use(express.static(path.join('client', 'build')));

server.get("/", (req, res) => {
  res.sendFile(path.join('client', 'build', 'index.html'))
});

server.get("/api/tweets/content", (req, res) => {
    const contentString = req.query.content;

    axios({
      method: 'get',
      url: `https://api.twitter.com/1.1/search/tweets.json?q=${contentString}&tweet_mode=extended`,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then(function (response) {
      res.json(response.data);
      console.log(response.data)
    })
    .catch(function (error) {
      console.log(error.response || error);
      res.status(500).json({ errorMessage: 'Internal server error!' })
    });
})

server.get("/api/tweets",  (req, res) => {
  const queryString = req.query.search;

axios({
  method: 'get',
  url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${queryString}&tweet_mode=extended`,
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
})
  .then(function (response) {
    res.json(response.data);
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error.response || error);
    res.status(500).json({ errorMessage: 'Internal server error!'});
  });
});

server.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

server.listen(port, () => console.log(`server started on port ${port}`));