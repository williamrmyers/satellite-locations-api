require('./config/config.js');

const express = require('express');
const _ = require('lodash');
const R = require('ramda');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Satellite} = require('./models/satellite')

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());

const maxNumberOfSatellites = 1738;

// Helper functions
const isString = _.curry(
  _.trim,
  _.toString
);
// Returns the start object if less than the max otherwise returns null
const startCursor = (limit, start, max) => max >= limit + start? limit + start : null;

app.get('/all/geo/', async (req, res) => {
  const limit = _.toNumber(req.query.limit);
  const start = _.toNumber(req.query.start);
  try {
    const satellites = await Satellite.find({}, 'names apogee perigee period eccentricity inclination period')
    .skip(start)
    .limit(limit);

    if (!satellites) {
      return res.status(404).send({});
    }

    res.send({satellites, limit, start: startCursor(limit, start, maxNumberOfSatellites)});

  } catch (e) {
    return res.status(404).send({});
  }
});

app.get('/all/geo', async (req, res) => {
  try {
    const satellites = await Satellite.find({}, 'names apogee perigee period eccentricity inclination period');

    if (!satellites) {
      return res.status(404).send({});
    }

    res.send({satellites});

  } catch (e) {
    return res.status(404).send({});
  }
});

// get list of satelite purposes
app.get('/satellite/purposes', async (req, res) => {
  try {
    const satellites = await Satellite.aggregate(
      [
        { $group : { _id : "$purpose", total : { $sum : 1 } } }
      ]
    );
    if (!satellites) {
      return res.status(404).send({});
    }
    res.send({satellites});
  } catch (e) {
    return res.status(404).send({});
  }
});

// Return a list of satellites for one specific purposes
app.get('/satellite/purpose/', async (req, res) => {
  const purpose = isString(req.query.purpose);

  try {
    const satellites = await Satellite.find({ "purpose": purpose }, 'names apogee perigee period eccentricity inclination period purpose');

    if (!satellites) {
      return res.status(404).send({});
    }

    res.send({satellites});

  } catch (e) {
    return res.status(404).send({});
  }
});

// Get All data for a Sateltite by ID.

app.get('/satellite', async (req, res) => {
  const id = req.query.id;
  try {
    const satellites = await Satellite.findOne({_id: id});

    if (!satellites && !ObjectID.isValid(id)) {
      return res.status(404).send({});
    }

    res.send({satellites});

  } catch (e) {
    return res.status(404).send({});
  }
});

app.listen(port, ()=>{
  console.log(`App started on port ${port}`);
});
