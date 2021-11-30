import { MongoConnection } from './MongoConnection';
import { Mongoose } from "mongoose";
import { config } from 'config/Constants';
export class MongoConnection{
    public async connect():Promise<void>{
        try{
            await mongoose.connect(config.MONGO_CONECTION,{useNewUrlParser:true, useUnifield:true})
            console.log('Database connectd');
        }catch(err){
            console.error(err.message);
            process.exit(1)
        }
    }
}