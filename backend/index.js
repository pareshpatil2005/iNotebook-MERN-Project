const connectToMongo = require('./db');
const express = require('express');

connectToMongo();

var cors = require('cors')

const app = express(); // Create an express app
const port = 5000;

app.use(cors());
app.use(express.json());     // middleware

// app.get('/', (req, res) => {
//     res.send('Hello Paresh!')
//   })


// Available Routes
  
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})