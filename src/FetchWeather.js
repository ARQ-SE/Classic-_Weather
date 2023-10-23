const fetchWeather = async (inputValue) => {
  console.log(inputValue);
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=9119fc876a184f42819173841230307&q=${inputValue}&days=3`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // console.log("This data is fetched directly from api", data);
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
};

export default fetchWeather;
