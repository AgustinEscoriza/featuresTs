const profile = {
  name: 'alex',
  age: 20,
  coords:{
    lat: 0,
    lng: 15
  },
  setAge(age: number): void{
    this.age = age;
  }
};

const { age, name }: { age: number, name: string } = profile;  //No pasa nada con el error ese en teoria

const { 
  coords: { lat, lng }
 }: { coords: { lat: number, lng: number } } = profile;
