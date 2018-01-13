import { Schema, model } from 'mongoose';

// TODO
// Need to find a better way of grabbing the date, probably some biz logic in UserRouter
let ResourcesSchema: Schema = new Schema({

  name: {
    type: String,
    default: '',
    required: true
  },
  description: {
    type: String,
    default: '',
    required: false
  },
  resourceContentReg: {
    type: String,
    default: '',
    required: true
  },
  status: {
    type: String,
    default: 'AC',
    required: true
  },
  
});


export default model('Resources', ResourcesSchema);