const request = require("request");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=22.80&lon=86.20&APPID=62b4ca8c3ab560e2742636ac825805d5&units=metric";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data);
});
