// const carMakers: string[] =  [];  
const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = []; // [['f150'],['corolla'],['camaro']];

// Help woth inference when extracting values
const car = carMakers[0];
const myFirstCar = carMakers.pop();

// Prevents incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string =>{
  return car.toUpperCase();
});

// Flexible Types
const importantDates = [ new Date(), '2030-10-10'];
const importantDates2 : (Date | string)[] = [new Date()];
importantDates2.push('2030-10-10');
importantDates.push(new Date());