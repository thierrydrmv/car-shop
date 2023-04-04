import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';
import AbstractODM from '../../../src/Models/AbstractODM';

const carOutput: Car = new Car({
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  id: '642b0df19506445d7b0bc77b',
  doorsQty: 4,
  seatsQty: 5,
});

const carInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

describe('Testando o service dos carros', function () {
  it('Deve adicionar um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.create(carInput);
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Buscando um carro pelo id com sucesso', async function () {
    sinon.stub(Model, 'findById').resolves(carOutput);

    const service = new CarService();
    const result = await service.getCar('642b0df19506445d7b0bc77b');
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Buscando todos os carros', async function () {
    sinon.stub(Model, 'find').resolves([carOutput]);

    const service = new CarService();
    const result = await service.getAllCars();
    expect(result).to.be.deep.equal([carOutput]);
  });

  it('Deve atualizar um Car', async function () {
    sinon.stub(AbstractODM.prototype, 'update').resolves(carOutput);

    const service = new CarService();
    const result = await service.editCar('642b0df19506445d7b0bc77b', carInput);

    expect(result).to.be.deep.equal(carOutput);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});