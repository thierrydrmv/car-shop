import IMotorCycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class MotorCycle extends Vehicle {
  private category:string;
  private engineCapacity: number;

  constructor(
    motorCycle: IMotorCycle,
  ) {
    super({
      model: motorCycle.model,
      year: motorCycle.year,
      color: motorCycle.color,
      status: motorCycle.status,
      buyValue: motorCycle.buyValue,
      id: motorCycle.id,
    });

    this.category = motorCycle.category;
    this.engineCapacity = motorCycle.engineCapacity;
  }
}