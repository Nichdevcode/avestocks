import { IDeposit } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const DepositSchema: Schema = new Schema<IDeposit>({
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    default: 0
  },
  wallet: {
    type: String,
    required: true,
  },
  proof: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['processing', 'approved', 'denied'],
    default: 'processing'
  },
}, {
  timestamps: true
});

const DepositModel = models.Deposit || model('Deposit', DepositSchema);


export default DepositModel