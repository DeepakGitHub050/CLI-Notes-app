const geoloc = (address, callback) => {
  setTimeout(() => {
    const data = {
      long: 0,
      lat: 0,
    };
    callback(data);
  }, 2000);
};
geoloc("IN", (data) => {
  console.log(data);
});
