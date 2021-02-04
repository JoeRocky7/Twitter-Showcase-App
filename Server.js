const express = require('express');
const server = express();
const axios = require('axios');
const { json } = require('express');
const path = require('path');
var cors = require('cors')

server.use(express.static(path.join('client', 'build')));

server.get("/", (req, res) => {
  res.sendFile(path.join('client', 'build', 'index.html'))
});

let getTweets = [{
  method: 'get',
  url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=NASA&count=200`,
  headers: {
    Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAF9BLwEAAAAAwqPxkv2I3cwhqbqHlTkx1pvOHWU%3D8inbjXB0afn1AB8uWmA93PDBTJ0rJLn1KpOfjcgXUOQ82woUkH",
  }
}, {
  method: 'get',
  url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=SpaceX&count=200`,
  headers: {
    Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAF9BLwEAAAAAwqPxkv2I3cwhqbqHlTkx1pvOHWU%3D8inbjXB0afn1AB8uWmA93PDBTJ0rJLn1KpOfjcgXUOQ82woUkH",
  }
}]





server.get("/api/tweets/", (req, res) => {
  axios(...getTweets)
  .then(function (response) {
          res.json(response.data);
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
})




// server.get("/api/tweets/NASA",  (req, res) => {
//   axios({
//     method: 'get',
//     url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=NASA&count=200`, 
//     headers: {
//       Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAF9BLwEAAAAAwqPxkv2I3cwhqbqHlTkx1pvOHWU%3D8inbjXB0afn1AB8uWmA93PDBTJ0rJLn1KpOfjcgXUOQ82woUkH",
//     }
//   })
//     .then(function (response) {
//       res.json(response.data);
//       console.log(response.data)
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });

// server.get("/api/tweets/SpaceX",  (req, res) => {
//   axios({
//     method: 'get',
//     url: `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=SpaceX&count=200`, 
//     headers: {
//       Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAF9BLwEAAAAAwqPxkv2I3cwhqbqHlTkx1pvOHWU%3D8inbjXB0afn1AB8uWmA93PDBTJ0rJLn1KpOfjcgXUOQ82woUkH",
//     }
//   })
//     .then(function (response) {
//       res.json(response.data);
//       console.log(response.data)
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });

server.listen(3002, () => {
  console.log("Server is up and listening on 3002...")
})