import {model, Schema} from 'mongoose';

const ClientSchema = new Schema({

    clientname: {
        type: String,
        required: true,
        unique: true
    }

}, {versionKey: false});

const Client = model('Client', ClientSchema);

export default Client;