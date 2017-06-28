const express = require('express');
const randomWord = require('random-word');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render('home', {title: "home"})
})

app.get('/about', function(req, res){
  res.render('about', {title: "about", random: randomWord()});
})

app.listen(3000, function() {
  console.log('Listening on 3000');
})
