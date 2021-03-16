//I set an constant variable for kevin
const kelvin = 293;

//celsius is with 20 less
const celsius = kelvin - 273;

//I converted in fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//I rounded the fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);