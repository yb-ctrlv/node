const express = require('express')


const app = express();


app.get('/', (req, res) => res.send('root'));

// localhost:3000/about
app.get('/about', (req, res) => res.send('about'));

// localhost:3000//random.text
app.get('/random.text', (req, res) => res.send('random.text'));

// localhost:3000/<number>
app.get(/^\/[0-9]+$/, (req, res) => res.send('regexp'));

// localhost:3000/user/<userId>/item/<itemId>
app.get('/user/:userId/item/:itemId', (req, res) => {
  const { userId, itemId } = req.params;
  res.send(`userId: ${userId}, itemId: ${itemId}`);
}).listen(3000)