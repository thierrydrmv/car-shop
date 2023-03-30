import ICar from '../Interfaces/ICar';

export default class Car {
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | false;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;
  protected id: string | undefined;

  constructor(
    car: ICar,
  ) {
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status || false;
    this.buyValue = car.buyValue;
    this.id = car.id;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}