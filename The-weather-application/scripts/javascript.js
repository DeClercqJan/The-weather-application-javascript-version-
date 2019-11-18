function isFloat(x) { return !!(x % 1); }

async function test() {
    // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon} 
    await fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${my_position_latitude_to_fixed}_&lon=${my_position_latitude_float}&appid=fac9676aa8de6252977e1a8672e861e2`)
    .then(ste => ste.json())
    .then(result => {
        console.log(result)
        // console.log(result.city)
        // console.log(result.list)
        // console.log(result.list.weather);
        /*
        result.list.forEach(element => {
            // console.log(element);
            console.log(element.weather)
            console.log(element.weather[0]);
            console.log(element.weather[0].main);
            console.log(element.weather[0].description);
        });

    })
    */
})
}

function showPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        // getting "is not a float"-error from API
      console.log(position);
      my_position_longitude = position.coords.longitude;
      //console.log(my_position_longitude);
      my_position_longitude_string = my_position_longitude.toString();
      my_position_longitude_float = parseFloat(my_position_longitude_string);
      console.log(typeof my_position_longitude_float);
      console.log(isFloat(my_position_longitude_float))
      console.log(my_position_longitude_float);
      my_position_latitude = position.coords.latitude;
      my_position_latitude_string = my_position_latitude.toString();
      my_position_latitude_float = parseFloat(my_position_latitude_string);
      console.log(typeof my_position_latitude_float);
      console.log(isFloat(my_position_latitude_float))
      console.log(my_position_latitude_float);
      my_position_latitude_to_fixed = my_position_latitude_float.toFixed(6);
      console.log(my_position_latitude_to_fixed);
      test();
    });
  } else {
    alert("Sorry, your browser does not support HTML5 geolocation.");
  }
}

window.onload = showPosition();


