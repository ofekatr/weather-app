import { extractExistingProperties } from 'app/common/utils/objects';
import 'dotenv/register';

const extractedConfig = extractExistingProperties(process.env, 'WEATHER_API_KEY', 'NODE_ENV');

const config = {
    weatherApi: {
        key: extractedConfig.WEATHER_API_KEY
    },
}

export default config;

