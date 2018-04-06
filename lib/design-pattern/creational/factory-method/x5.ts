import { Bmw } from './bmw';

export class X5 extends Bmw {
    constructor(model: string, price: number, maxSpeed: number){
        super(model, price, maxSpeed);
    }
}