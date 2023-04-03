import { Model, Schema, model, models, 
  UpdateQuery, isValidObjectId,
} 
  from 'mongoose';

  type IModel<T> = Model<T>;

export default class AbstractODM<T> {
  private schema: Schema;
  private model: IModel<T>;

  constructor(collectionName: string, schemaDefinition: Schema | any) {
    this.schema = new Schema(schemaDefinition);
    this.model = models[collectionName] || model(collectionName, this.schema);
  }

  public async create(vehicle: T): Promise<T> {
    return this.model.create({ ...vehicle });
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }
  public async getOne(id: string): Promise<T | null> {
    return this.model.findById(id);
  }
  public async update(_id: string, vehicle: T): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('Invalid Mongo id');
    return this.model.findByIdAndUpdate(
      _id,
      vehicle as UpdateQuery<T>,
      { new: true },
    );
  }
}