import { ICity } from 'app/common/models';
import IWeatherApiGeopositionResult from './geoposition-result.dto';

function mapWeatherApiGeopositionResultToDomain(geopositionResult: IWeatherApiGeopositionResult): ICity {
    return {
        cityId: geopositionResult.Key,
        cityName: geopositionResult.LocalizedName,
    }
}

export default mapWeatherApiGeopositionResultToDomain;