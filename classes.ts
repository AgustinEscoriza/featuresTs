class Vehicle{
  constructor( public color: string){
  }

  drive(): void{
    console.log('chugga chugga');
  }

  honk(): void{
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string){
    super(color);
  }
  drive(): void{
    console.log('vroom')
  }

  startDrivingProcess(): void{
    this.drive();
  }
}

const toyota = new Car(4, 'red');
// toyota.drive();
toyota.startDrivingProcess();
toyota.honk();