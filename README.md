# Weather Dashboard App
A dashboard interface for clients to consume weather details for cities all over the world. 

## Features
- Real-time accurate daily and weekly forecasts for cities around the world.
- Favorites collection to save frequently searched cities.
- Supplying forecasts for clients' current location based on geoposition coordinates.
- Supports metric and imperial modes.

## Implementation Details
- Developed in TypeScript, using React.
- Consumes AccuWeather API for weather and geoposition related data.

## Project Structure
### app folder
- `core` - folder containing app instantiation logic and core functionality related files.
- `common` - folder with common app files
- `weather` - Weather (home) page module related files.
- `favorites` - Favorites page module related files.
## How to run locally
### Add .env file with following variables

```
NODE_PATH=./
REACT_APP_WEATHER_API_KEY=
```

### Run following commands

```
$ npm install
$ npm start
```
## Development

#### Scripts to run app in different modes
- use `npm run start` to run in autocompile mode.

#### Other scripts
- use `npm run build` to build app and compile it to build folder.
