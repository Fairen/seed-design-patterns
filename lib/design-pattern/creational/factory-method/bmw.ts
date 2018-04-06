export abstract class Bmw {

    protected model: string;
    protected price: number;
    protected maxSpeed: number;
    
    constructor(model: string, price: number, maxSpeed: number){
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}