define({ "api": [  {    "type": "get",    "url": "/all/geo",    "title": "Get all data with Geographic data",    "name": "Get_Satellite_Location_API",    "version": "1.0.0",    "group": "All_Data",    "sampleRequest": [      {        "url": "https://satellite-locations-api.herokuapp.com/all/geo/"      }    ],    "description": "<p>Fetch a list of all of satallites alphabetically</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "limit",            "description": "<p>The Number of Satellite to return at a time</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "start",            "description": "<p>The Pagination Start Point</p>"          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "curl -X GET 'https://satellite-locations-api.herokuapp.com/all/geo/?limit=10&start=40'",        "type": "json"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "_id",            "description": "<p>Object ID,</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "names",            "description": "<p>Satellite Name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "perigee",            "description": "<p>Satellite Perigee</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "apogee",            "description": "<p>Satellite Apogee</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "eccentricity",            "description": "<p>Satellite Eccentricity</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "inclination",            "description": "<p>Satellite Inclination</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "period",            "description": "<p>Satellite Period</p>"          }        ]      }    },    "filename": "/Users/williammyers/Desktop/node/satellites-api/server/server.js",    "groupTitle": "All_Data"  },  {    "type": "get",    "url": "/satellite/purpose/",    "title": "Return a list of satellites for one specific purposes",    "name": "Satellite_Purpose",    "version": "1.0.0",    "group": "Satellite_Purposes",    "sampleRequest": [      {        "url": "https://satellite-locations-api.herokuapp.com/satellite/purpose"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "purpose",            "description": "<p>Name of the Satellite Purpose.</p>"          }        ]      }    },    "examples": [      {        "title": "Example usage:",        "content": "curl -i https://satellite-locations-api.herokuapp.com/satellite/purpose",        "type": "json"      }    ],    "filename": "/Users/williammyers/Desktop/node/satellites-api/server/server.js",    "groupTitle": "Satellite_Purposes"  },  {    "type": "get",    "url": "/satellite/purposes",    "title": "Get Satellite Purposes",    "name": "Satellite_Purposes_List",    "version": "1.0.0",    "group": "Satellite_Purposes",    "sampleRequest": [      {        "url": "https://satellite-locations-api.herokuapp.com/satellite/purposes"      }    ],    "examples": [      {        "title": "Example usage:",        "content": "curl -i https://satellite-locations-api.herokuapp.com/satellite/purposes",        "type": "json"      }    ],    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "_id",            "description": "<p>Technology Development,</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "total",            "description": "<p>179,</p>"          }        ]      }    },    "filename": "/Users/williammyers/Desktop/node/satellites-api/server/server.js",    "groupTitle": "Satellite_Purposes"  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p>"          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "/Users/williammyers/Desktop/node/satellites-api/documentation/main.js",    "group": "_Users_williammyers_Desktop_node_satellites_api_documentation_main_js",    "groupTitle": "_Users_williammyers_Desktop_node_satellites_api_documentation_main_js",    "name": ""  }] });
