import { PilotDroidFactory } from './pilot-droid-factory';
import { BattleDroidFactory } from './battle-droid-factory';
import { DroidFactory } from './droid-factory';
import { Droid } from './droid';

export function droidProducer(kind : string) : DroidFactory<Droid>{
    switch (kind) {
        case "BATTLE":
            return new BattleDroidFactory();
        case "PILOT":
            return new PilotDroidFactory();
        default:
            throw new Error(`Droid type : [${kind}] not supported`);
    }
}