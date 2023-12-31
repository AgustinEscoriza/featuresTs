const add = (a: number, b: number): number=>{
  return a + b;
};

const subtract = ( a: number, b: number): number=>{
  return a-b;
};

function divide(a: number, b: number): number{
  return a / b;
};

const multiply = function(a:number, b: number): number{
  return a * b;
};

const logger = (message: string): void=>{
  console.log(message);
  return undefined;
};

const throwError = (message: string): never =>{
  if(!message){
    throw new Error(message);
  }
  throw new Error('Otra cosa'); //si sacas esto mejor usar void
  // return message; No te va a dejar
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({date, weather}: { date: Date, weather: string}): void =>{
  console.log(date);
  console.log(weather);
};

// ES2015
const logWeather2 = ({date, weather })=>{
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
