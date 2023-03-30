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
}