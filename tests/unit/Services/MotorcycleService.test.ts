import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import MotorCycle from '../../../src/Domains/Motorcycle';
import AbstractODM from '../../../src/Models/AbstractODM';

const motorcycleOutput: MotorCycle = new MotorCycle({
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  id: '642b1159be4b3a0428baf084',
  category: 'Street',
  engineCapacity: 600,
});

const motorcycleInput: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

describe('Adicionando uma moto ao banco de dados', function () {
  it('Deve adicionar uma moto com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.create(motorcycleInput);
    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Buscando uma moto pelo id com sucesso', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.getMotorcycle('642b1159be4b3a0428baf084');
    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Buscando todas as motos', async function () {
    sinon.stub(Model, 'find').resolves([motorcycleOutput]);

    const service = new MotorcycleService();
    const result = await service.getAllMotorcycles();
    expect(result).to.be.deep.equal([motorcycleOutput]);
  });

  it('Deve atualizar uma Moto', async function () {
    const updateOutputMotorcycle: MotorCycle = new MotorCycle(motorcycleInput);
    sinon.stub(AbstractODM.prototype, 'update').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.editMotorcycle('642b0df19506445d7b0bc77b', motorcycleInput);

    expect(result).to.be.deep.equal(updateOutputMotorcycle);
  });

  afterEach(function () {
    sinon.restore();
  });
});