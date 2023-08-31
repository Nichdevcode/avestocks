import { IWithdrawal } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const WithdrawalSchema: Schema = new Schema<IWithdrawal>({
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
  },
  account_number: {
    type: String,
  },
  account_name: {
    type: String,
  },
  bank_name: {
    type: String,
  },
  wallet: {
    type: String,
    // required: true,
  },
  type: {
    type: String,
    enum: ['BANK', "CRYPTO"]
  },
  asset: {
    type: String,
    enum: ["BTC", "ETH", "BNB"]
  },
  // proof: {
    // type: String,
  //   required: true,
  // },
  status: {
    type: String,
    enum: ["processing", "approved", "denied"],
    default: "processing"
  },
}, {
  timestamps: true
});

const WithdrawalModel = models.Withdraw || model('Withdraw', WithdrawalSchema);


export default WithdrawalModel