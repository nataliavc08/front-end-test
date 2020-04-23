const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

//USE
app.use('/dist', express.static(path.join(__dirname, '../build')))

//Define route handlers

//Main get request
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
})

//Catch All Error Handler
app.all("*", (req, res,) => {
  return res.sendStatus(404)
})

//Default Error Handler
app.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).send('Error', { error: err });
})

app.listen(port, () => console.log(`Listening on port ${ port }`));