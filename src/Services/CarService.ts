import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  public createDomain(car: ICar): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createDomain(newCar);
  }

  public async getAllCars() {
    const carODM = new CarODM();
    const cars = await carODM.getAllCars();
    const allCars = cars.map((car) => this.createDomain(car));
    return allCars;
  }

  public async getCar(id: string) {
    const carODM = new CarODM();
    const car = await carODM.getCar(id);
    if (!car) return null;
    return this.createDomain(car);
  }
}