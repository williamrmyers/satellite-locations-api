# satellite-locations-api
## [Full Documentation](https://satellite-locations-api.herokuapp.com/documentation/)

This is an example API I've written to pull the location data of orbiting satellites. The data is from the [UCS Satellite Database](https://www.ucsusa.org/nuclear-weapons/space-weapons/satellite-database#.W4jFBH4naiA).

I intend to use the data to build a Satellite tracking App.

#### To run the Repository you need to run:
```
git clone 'https://github.com/williamrmyers/satellite-locations-api'

npm install
```

#### You then need to create this a file called `config.json` in `server/config/` then add your `MONGODB_URI`.
```
{
  "development": {
    "PORT":3000,
    "MONGODB_URI": "",
    "JWT_SECRET": ""
  }
}
```
#### To Start

```
npm run dev
```

#### To build the documentation run
```
apidoc -f \".*\.js$\" -e "node_modules/" -o "documentation/"
```

#### Test the documentation Live here. [Full Documentation](https://satellite-locations-api.herokuapp.com/documentation/)
