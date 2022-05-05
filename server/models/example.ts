import { ObjectId } from 'mongodb';

export interface Example {
  _id: ObjectId;
  name: string;
}
