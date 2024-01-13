const API_Key = "c21f00db0213bf819fa9d709032ec69c";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_Key });

  return fetch(url).then((res) => res.json());
};

const formatCurrentweather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatForecastWeather = async (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 5).map(())
};

const getFormattedWeatherdata = async (searchParams) => {
  const formattedCurrectWeather = await getWeatherData(
    "weather",
    searchParams
  ).then((data) => formatCurrentweather(data));
  const { lat, lon } = formatCurrentweather;

  const formattedForecastWeather = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedForecastWeather };
};

export default getFormattedWeatherdata;
