# Weather Dashboard App
A dashboard interface for clients to consume weather details for cities all over the world.  
A demo is available <a href='https://ofekatr-weather-app.netlify.app'>here</a>.

## Features
- Real-time accurate daily and weekly forecasts for cities around the world.
- Favorites collection to save frequently searched cities.
- Supplying forecasts for clients' current location based on geoposition coordinates.
- Supports metric and imperial modes.

## Pictures
![Screenshot (167)](https://user-images.githubusercontent.com/46415136/123808445-6cdfe180-d8f9-11eb-800c-e64665fc936e.png)

![Screenshot (168)](https://user-images.githubusercontent.com/46415136/123808463-70736880-d8f9-11eb-8fd3-86c2806f01a5.png)

![Screenshot (169)](https://user-images.githubusercontent.com/46415136/123808458-6f423b80-d8f9-11eb-9ffa-3befa2411f0d.png)

![Screenshot (170)](https://user-images.githubusercontent.com/46415136/123808455-6ea9a500-d8f9-11eb-9912-c489f67dcf4e.png)

![Screenshot (171)](https://user-images.githubusercontent.com/46415136/123808453-6e110e80-d8f9-11eb-9965-f6eb36faa56e.png)

## Implementation Details
- Developed in TypeScript, using React.
- Consumes AccuWeather API for weather and geoposition related data.
- Applies Semantic-UI elements for styling.
- Utilizes Toast.js for error handling.

## Project Structure
### app folder
- `core` - folder containing app instantiation logic and core functionality related files.
- `common` - folder with common app files.
- `weather` - Weather (Home) page module related files.
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
- use `npm run build` to create an optimized production build and compile it to `build` folder.
