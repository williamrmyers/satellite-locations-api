require('./config/config.js');

const express = require('express');
const _ = require('lodash');
const R = require('ramda');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Satellite} = require('./models/satellite')

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/all/geo', async (req, res) => {
  try {
    const satelites = await Satellite.find({ apogee: { $exists: true, $nin: null } }, 'names apogee perigee period eccentricity inclination period');

    if (!satelites) {
      return res.status(404).send({});
    }

    res.send({satelites});

  } catch (e) {
    return res.status(404).send({});
  }
});

app.listen(port, ()=>{
  console.log(`App started on port ${port}`);
});

//Future Routes

// get list of satelite purposes


// Return a list of satelites for one specific purposes


// Get All data for a Sateltite by ID.
