import { Rx24 } from './rx24';
import { DroidFactory } from './droid-factory';

export class PilotDroidFactory extends DroidFactory<Rx24> {
    constructor() {
        super(Rx24);
    }
}