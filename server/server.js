require('./config/config.js');

const express = require('express');
const _ = require('lodash');
const R = require('ramda');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const path = require('path');

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

/**
 * @api {get} /all/geo Get all data with Geographic data
 * @apiName Get Satellite Location API
 * @apiVersion 1.0.0
 * @apiGroup Main
 * @apiSampleRequest https://satellite-locations-api.herokuapp.com/all/geo/
 * @apiDescription Fetch a list of all of satallites alphabetically
 *
 * @apiParam (Pagination Parameters) {Number} limit The Number of Satellite to return at a time
 * @apiParam (Pagination Parameters) {Number} start The Pagination Start Point
 *
 * @apiExample Example usage:
 * curl -X GET 'https://satellite-locations-api.herokuapp.com/all/geo/?limit=10&start=40'
 *
 * @apiSuccess {String} _id Object ID,
 * @apiSuccess {String} names Satellite Name
 * @apiSuccess {String} perigee Satellite Perigee
 * @apiSuccess {String} apogee Satellite Apogee
 * @apiSuccess {String} eccentricity Satellite Eccentricity
 * @apiSuccess {String} inclination Satellite Inclination
 * @apiSuccess {String} period Satellite Period
 *
 */

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

/**
 * @api {get} /satellite/purposes Get Satellite Purposes
 * @apiName Satellite Purposes List
 * @apiVersion 1.0.0
 * @apiGroup Satellite Purposes
 * @apiSampleRequest https://satellite-locations-api.herokuapp.com/satellite/purposes
 *
 * @apiDescription Fetch a list of all of the `purposes` for all satallites.
 *
 * @apiExample Example usage:
 * curl -i 'https://satellite-locations-api.herokuapp.com/satellite/purposes'
 *
 * @apiSuccess {String} _id Name of Satallites Purpose
 * @apiSuccess {String} total Number of Satallites with that Purpose
 *
 */

// get list of Satellite purposes
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

/**
 * @api {get} /satellite/purpose/ Get a Satellites Purpose
 * @apiName Satellite Purpose
 * @apiVersion 1.0.0
 * @apiGroup Satellite Purposes
 * @apiSampleRequest https://satellite-locations-api.herokuapp.com/satellite/purpose
 *
 * @apiDescription Fetch all of the satellite for the supplied purpose. Pagination is not enabled for this endpoint.
 *
 * @apiParam (Satellite Purpose) {String} purpose Name of the Satellite Purpose.
 * @apiExample Example usage:
 * curl -i 'https://satellite-locations-api.herokuapp.com/satellite/purpose'
 *
 *
 */

// Return a list of satellites for one specific purposes
app.get('/satellite/purpose', async (req, res) => {
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

/**
 * @api {get} /satellite/ Get Satellites by ID
 * @apiName Satellite by ID
 * @apiVersion 1.0.0
 * @apiGroup Satellite By ID
 * @apiSampleRequest https://satellite-locations-api.herokuapp.com/satellite/
 *
 * @apiDescription Get all of the infomration associated with a single satellite.
 *
 * @apiParam (id) {String} id id of a satellite
 * @apiExample Example usage:
 * curl -i 'https://satellite-locations-api.herokuapp.com/satellite?id=5b315c28798831a00e6b404b'
 *
 *
 */

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

// Serve the documentation
const publicPath = path.join(__dirname, '../documentation');
app.use('/documentation', express.static(publicPath))

app.listen(port, ()=>{
  console.log(`App started on port ${port}`);
});
