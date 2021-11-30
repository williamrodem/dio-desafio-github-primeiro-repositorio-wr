import {URLController} from './controller/URLController';
import express, {Request, Response} from 'express';
import { MongoConnection } from 'database/MongoConnection';
const api = express();
api.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new URLController()
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);
/*api.get('/test', (req:Request, res: Response)=>{
    res.json({sucess:true});
});*/

api.listen(500, ()=>console.log('express listening'));