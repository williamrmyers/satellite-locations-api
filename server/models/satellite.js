const mongoose = require('mongoose');

const Satellite = mongoose.model('Satellite', {
  names: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  Country_Operator_Owner: {
    type: String,
    minlength: 1,
    trim: true
  },
  operator_owner: {
    type: String,
    minlength: 1,
    trim: true
  },
  longitude_of_geo: {
    type: String,
    required: true,
    trim: true
  },
  perigee: {
    type: String,
    required: true,
    trim: true
  },
  apogee: {
    type: String,
    required: true,
    trim: true
  },
  eccentricity: {
    type: String,
    required: true,
    trim: true
  },
  inclination: {
    type: String,
    required: true,
    trim: true
  },
  period: {
    type: String,
    required: true,
    trim: true
  },
  purpose: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = { Satellite };


// {   "names": "Aalto-1",
//     "country_org_un_registry": "NR (10/17)",
//     "Country_Operator_Owner": "Finland",
//     "operator_owner": "University of Aalto",
//     "users": "Civil",
//     "purpose": "Technology Development",
//     "detailed_purpose": "",
//     "class_of_orbit": "LEO",
//     "type_of_orbit": "",
//     "longitude_of_geo": 0,
//     "perigee": 497,
//     "apogee": 517,
//     "eccentricity": 0.00145,
//     "inclination": 97.45,
//     "period": 94.7,
//     "launch_mass": 5,
//     "dry_mass": "",
//     "power": 4.5,
//     "date_of_launch": "6/23/17",
//     "expected_lifetime": "2 yrs.",
//     "contractor": "University of Aalto",
//     "country_of_contractor": "Finland",
//     "launch_site": "Satish Dhawan Space Centre",
//     "launch_vehicle": "PSLV",
//     "COSPAR_number": "2017-036L",
//     "NORAD_number": 42775,
//     "comments": "Technology development and education.",
//     "": "",
//     "source_of_orbital_data": "JMSatcat/10_17",
//     "source": "https://directory.eoportal.org/web/eoportal/satellite-missions/a/aalto-1",
//     "source_2": "http://www.planet4589.org/space/log/satcat.txt",
//     "source_3": "",
//     "source_4": "",
//     "source_5": "",
//     "source_6": ""
//   }
