import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/Motorcycle.ODM';

export default class MotorcycleService {
  public createDomain(motorcycle: IMotorcycle): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createDomain(newMotorcycle);
  }

  public async getAllMotorcycles() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.getAll();
    const allMotorcycle = motorcycle.map((m) => this.createDomain(m));
    return allMotorcycle;
  }

  public async getMotorcycle(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.getOne(id);
    if (!motorcycle) return null;
    return this.createDomain(motorcycle);
  }

  public async editMotorcycle(id: string, motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycleUpdated = await motorcycleODM.update(id, motorcycle);
    if (!motorcycleUpdated) return null;
    return this.createDomain(motorcycleUpdated);
  }
}