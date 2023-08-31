import { IBank } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const BankSchema: Schema = new Schema<IBank>({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  special: {
    type: Boolean,
    default: false,
  }, 
  recipient: {
    type: String,
    // required: true,
  },
  type: {
    type: String,
    // required: true,
  },
  branch: {
    type: String,
    // required: true,
  },
  reference: {
    type: String,
    // required: true,
  },
}, {
  timestamps: true
});

const BankModel = models.Bank || model('Bank', BankSchema);


export default BankModel