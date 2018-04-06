import { Droid } from './droid';

export abstract class DroidFactory<T extends Droid> {
    constructor(private modelConstructor: new () => T) { }

    public create(): T {
        return new (this.modelConstructor)();
    }
}