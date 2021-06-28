import ICity from 'app/common/models/city';
import IWeatherApiAutocompleteResult from './autocomplete-result.dto';

function mapWeatherApiAutocompleteResultDtoToDomain(autocompleteResultDto: IWeatherApiAutocompleteResult): ICity {
    return {
        cityId: autocompleteResultDto.Key,
        cityName: autocompleteResultDto.LocalizedName,
    }
}

export default mapWeatherApiAutocompleteResultDtoToDomain;