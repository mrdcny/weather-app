import { drizzleIcon, rain, snow, clearSky, cloudy } from "./icons";

export const kelvinToCelsius = (kelvin: number) => {
    return Math.round(kelvin - 273.15);
  };

  export const getIcon = (weather: string) => {
    switch (weather) {
      case "Drizzle":
        return drizzleIcon;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Clear":
        return clearSky;
      case "Clouds":
        return cloudy;
      default:
        return clearSky;
    }
  };


export function getFeelsLikeText(feelsLike: number, avgTemp: number) {
    if (feelsLike < avgTemp - 5) {
        return "Feels significantly colder than actual temperature.";
      }
      if (feelsLike > avgTemp - 5 && feelsLike <= avgTemp + 5) {
        return "Feels close to the actual temperature.";
      }
      if (feelsLike > avgTemp + 5) {
        return "Feels significantly warmer than actual temperature.";
      }
  
      return "Temperature feeling is typical for this range.";
}