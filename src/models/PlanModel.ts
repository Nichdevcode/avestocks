import { IPlan } from '@/interfaces';
import { models, model, Schema } from 'mongoose';

const PlanSchema: Schema = new Schema<IPlan>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  minimum: {
    type: Number,
    required: true,
  },
  maximum: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  roi: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true
});

const PlanModel = models.Plan || model('Plan', PlanSchema);


export default PlanModel