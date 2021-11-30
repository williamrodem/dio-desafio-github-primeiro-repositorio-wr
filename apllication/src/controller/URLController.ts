import { Request, response, Response } from "express";
import shortid from "shortid";
import { config } from "config/Constants";
import { URLModel } from "database/model/URL";

export class Controller {
    public async shorten(req:Request, res:Response):Promise<void>{
       
        const {originURl} = req.body
        const url = ewait( URLModel.findOne({originURl}))

        if (url){
            response.json(url)
            return
        }
        const hash=shortid.generate()
        const shortURL  = `${config.API_URL}/${hash}`
        const newURL = await URLModel.create({hash, shortid, originURL})

        response.json({newURL})
    }
    public async redirect(req:Request, res:Response):Promise<void>{
       
        const {hash} = req.params

        const url = await URLModel.findOne({hash})
        if(url){
            response.redirect(url.originURL);
            return
        }
        const url = {
            originURL:'',
            hash:'',
            shortURL:'',
            response redirect(url.originURl)
        }
    }
}