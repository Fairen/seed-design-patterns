import { Bmw } from './bmw';
import { X5 } from './x5';
import { X6 } from './x6';
import { BmwTypes } from './bmw-types';

export class Factory {

    public static create(type: BmwTypes): Bmw {
        switch (type) {
            case BmwTypes.X5:
                return new X5(
                    BmwTypes.X5.toString(),
                    108000,
                    300
                );
            case BmwTypes.X6:
                return new X6(
                    BmwTypes.X6.toString(),
                    112000,
                    320
                );
            default:
                throw new Error(`Type error : [${type}] not supported`);
        }
    }

}