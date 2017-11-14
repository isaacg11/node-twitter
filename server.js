const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const twitter = require('./twitter')({
  consumerKey: 'CONSUMER_KEY',
  consumerSecret: 'CONSUMER_SECRET'
});

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('server connected');
  twitter.search('#basketball', 10, (result) => {
    console.log(result);
  });
})
