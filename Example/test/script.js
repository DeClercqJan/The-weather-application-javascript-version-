//sample fetch - current weather data -
//ref URL; https://openweathermap.org/current

/*
fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=fac9676aa8de6252977e1a8672e861e2"
)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
*/

var city = "Ghent";
var country = "BE";
var link = "https://api.openweathermap.org/data/2.5/forecast/?q=";
var key = "fac9676aa8de6252977e1a8672e861e2";

async function test() {
  await fetch(link + city + "," + country + "&appid=" + key)
    /*
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });

  */
    .then(element => element.json())
    .then(element => console.log(element));

  /*
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
    */
}

test();
