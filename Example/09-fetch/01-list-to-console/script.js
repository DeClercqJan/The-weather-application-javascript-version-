/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
// your code here

// Steps
// Install SEVE + NODEJS + NPX in terminal
// In terminal, go to file folder "example" 
// Type "npm run start", which activates the script in package.json to activate the local server
// Type "npm run api"
// Now you'll be able to access the database-file in localhost:3000/heroes (it's possible a different port is activated; you'll see this in terminal)
// Run live preview of index.html and check console when clicking on button

async function test() {
    await fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=fac9676aa8de6252977e1a8672e861e2")
    .then(ste => ste.json())
    .then(result => {
        console.log(result)
    })
}
document.getElementById("run").addEventListener("click",test)

})();
