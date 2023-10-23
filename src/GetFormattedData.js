const getFormattedData2 = (rawda) => {
  // console.log("This is the raw data coming to be formatted once again", rawda);

  const {
    location: { name, country, localtime },
    current: {
      cloud,
      feelslike_c,
      feelslike_f,
      humidity,
      precip_in,
      temp_c,
      temp_f,
      wind_kph,
      condition: { icon, text },
    },
    forecast: { forecastday },
  } = rawda;
  return {
    name,
    country,
    localtime,
    cloud,
    feelslike_c,
    feelslike_f,
    humidity,
    precip_in,
    temp_c,
    temp_f,
    wind_kph,
    icon,
    text,
    forecastday,
  };
};
export default getFormattedData2;
