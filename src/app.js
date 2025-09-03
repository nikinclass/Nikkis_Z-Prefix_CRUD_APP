const express = require('express');
const app = express();
const PORT = 8000;
const knex = require('knex')(require('../knexfile.js')['development']);
const cors = require("cors");
const coresOptions = {Credentials: true};
app.use(cors(coresOptions));
app.use(express.json());

app.get('/', (req,res) => {
  res.send(`Express listening on port: ${PORT}`);
  console.log(req.body);
})

app.get('/User', (req, res) => {
  knex('User')
    .select('*')
    .then(data => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(404).json({error:'The data you are looking for could not be found. Please try again'});
    });
});

module.exports = app;

