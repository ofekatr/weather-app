import { extractExistingProperties } from 'app/common/utils/objects';

const extractedConfig = extractExistingProperties(process.env, 'REACT_APP_WEATHER_API_KEY', 'NODE_ENV');

const config = {
    weatherApi: {
        key: extractedConfig.REACT_APP_WEATHER_API_KEY
    },
}

export default config;

