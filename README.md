# satellite-locations-api
## [Full Documentation](https://satellite-locations-api.herokuapp.com/documentation/)

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
npm start
```

#### To build the documentation run
```
apidoc -f \".*\.js$\" -e "node_modules/" -o "documentation/"
```

#### Test the documentation Live here. [Full Documentation](https://satellite-locations-api.herokuapp.com/documentation/) 
