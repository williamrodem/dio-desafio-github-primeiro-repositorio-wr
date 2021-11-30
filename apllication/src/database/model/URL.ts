import { shortid } from 'shortid';
import { prop, Typegoose } from "@hasezoey/typegoose";

export class URL extends Typegoose{
    @prop({required:true})
    hash:string
    @prop({required:true})
    originURL:string
    @prop({required:true})
    shortid:string
}
export const URLModel = new URL().getModelForClass(URL);