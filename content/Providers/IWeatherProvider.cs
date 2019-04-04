using System.Collections.Generic;
using Vue2Spa.Models;

namespace Vue2Spa.Providers
{
    public interface IWeatherProvider
    {
        List<WeatherForecast> GetForecasts();
    }
}
