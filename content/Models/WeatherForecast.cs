namespace Vue2Spa.Models
{
    public class WeatherForecast
    {
        public string DateFormatted { get; set; }        

        public string Summary { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
    }
}
