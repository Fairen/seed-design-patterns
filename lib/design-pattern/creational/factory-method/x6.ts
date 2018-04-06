import { Bmw } from './bmw';

export class X6 extends Bmw {
    constructor(model: string, price: number, maxSpeed: number){
        super(model, price, maxSpeed);
    }
}