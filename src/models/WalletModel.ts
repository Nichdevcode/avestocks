import { IWallet } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const WalletSchema: Schema = new Schema<IWallet>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  qr_code: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

const WalletModel = models.Wallet || model('Wallet', WalletSchema);


export default WalletModel