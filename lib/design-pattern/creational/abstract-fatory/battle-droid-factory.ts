import { B1 } from './b1';
import { DroidFactory } from './droid-factory';

export class BattleDroidFactory extends DroidFactory<B1> {
    constructor() {
        super(B1);
    }
}