forecast_array = [];

function change_table() {
  console.log("test change table");
  table = document.getElementsByTagName("table");
  console.log(table);
  table_html = table[0].innerHTML;
  console.log(table_html);
  weather_array = [];
  date_array = [];
  forecast_array.forEach(element => {
    // console.log(element);
    // console.log(element.weather[0].description);
    // console.log(element.dt_txt);
    if (element.dt_txt.includes("12:00:00")) {
      console.log(element);
      // console.log(element.dt_txt);
      console.log(element.weather[0].description);
      weather = element.weather[0].description;
      weather_array.push(weather);
      date = element.dt_txt.split(" ");
      console.log(date[0]);
      date_array.push(date[0]);
    }
    console.log(date_array);
    console.log(weather_array);
    for (i = 0; i < date_array.length; i++) {
      // for needs to be 1
      document.getElementById(
        `table_row_${i + 1}`
      ).innerHTML = `<td>${date_array[i]}</td>
  <td>${weather_array[i]}</td>`;
    }
  });
  console.log(all_data.city.name);
  document.getElementById("town").innerHTML = all_data.city.name;
}

function isFloat(x) {
  return !!(x % 1);
}

async function fetch_coordinates() {
  // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}
  console.log(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${my_position_latitude}&lon=${my_position_longitude}&appid=fac9676aa8de6252977e1a8672e861e2`
  );
  await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${my_position_latitude}&lon=${my_position_longitude}&appid=fac9676aa8de6252977e1a8672e861e2`
  )
    .then(ste => ste.json())
    .then(result => {
      console.log(result);
      all_data = result;
      forecast_array = result.list;
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
    });
  change_table();
}

function showPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      // getting "is not a float"-error from API
      console.log(position);
      my_position_longitude = position.coords.longitude;
      my_position_latitude = position.coords.latitude;
      fetch_coordinates();
    });
  } else {
    alert("Sorry, your browser does not support HTML5 geolocation.");
  }
}

window.onload = showPosition();

/*
async function fetch_input() {
  // standaarddata voor moskou await fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=fac9676aa8de6252977e1a8672e861e2")
  // example await fetch("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22")
 //  gent await fetch("https://api.openweathermap.org/data/2.5/weather?q=Gent,be&appid=fac9676aa8de6252977e1a8672e861e2")
 await fetch("https://api.openweathermap.org/data/2.5/forecast?q=Gent,be&appid=fac9676aa8de6252977e1a8672e861e2")
 .then(ste => ste.json())
  .then(result => {
      console.log(result)
      // console.log(result.city)
      // console.log(result.list)
      // console.log(result.list.weather);
      result.list.forEach(element => {
          // console.log(element);
          console.log(element.weather)
          console.log(element.weather[0]);
          console.log(element.weather[0].main);
          console.log(element.weather[0].description);
      });

  })
}
*/

async function fetch_input() {
  // var city = "Ghent";
  // console.log(document.getElementById("input_field").value);
  var city = document.getElementById("input_field_city").value;
  // var country = "BE";
  var country_input = document.getElementById("input_field_country").value;
  var country = country_input.toUpperCase();
  console.log(country);
  var link = "https://api.openweathermap.org/data/2.5/forecast/?q=";
  var key = "fac9676aa8de6252977e1a8672e861e2";

  // THIJS: AWAIT DOESN'T DO ANYTHING: FETCH ALONE + THEN / OR: USE CONST VARIABLE WITH AWAIT FETCH (PROMISE?) . otherwise? code would run without making sense??
  fetch(link + city + "," + country + "&appid=" + key)
    .then(element => element.json())
    .then(element => {
      all_data = element;
      console.log(element);
      // console.log(result.city)
      // console.log(result.list)
      // console.log(result.list.weather);
      element.list.forEach(element => {
        // console.log(element);
        // console.log(element.weather)
        // console.log(element.weather[0]);
        // console.log(element.weather[0].main);
        // console.log(element.weather[0].description);
      });
      forecast_array = element.list;
    });
  change_table();
}

// document.getElementById("submit").addEventListener("click", fetch_input)
document.getElementById("run").addEventListener("click", fetch_input);
