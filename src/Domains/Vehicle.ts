import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | false;
  protected buyValue: number;
  protected id: string | undefined;

  constructor(
    vehicle: IVehicle,
  ) {
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.status = vehicle.status || false;
    this.buyValue = vehicle.buyValue;
    this.id = vehicle.id;
  }
}