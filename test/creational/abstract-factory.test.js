'use strict';
let expect = require('chai').expect;

let DesignPattern = require('../../dist/design-pattern/design-pattern.module');

describe('[Abstract Factory] Producer - BattleDroid', () => {
    it('Should be a Battle Droid', () => {
        let droidFactory = DesignPattern.droidProducer("BATTLE");
        let droid = droidFactory.create();
        let b1 = new DesignPattern.B1();
        expect(typeof droid).to.equal(typeof b1);
    });
});

describe('[Abstract Factory] Producer - PilotDroid', () => {
    it('Should be a Pilot Droid', () => {
        let droidFactory = DesignPattern.droidProducer("PILOT");
        let droid = droidFactory.create();
        let rx24 = new DesignPattern.Rx24();
        expect(typeof droid).to.equal(typeof rx24);
    });
});

describe('[Abstract Factory] Producer - 404 Droid', () => {
    it('Should throw an error', () => {
        let kind = 'PROTOCOL'; 
        expect( () => DesignPattern.droidProducer(kind) )
        .to.throw(`Droid type : [${kind}] not supported`);
    });
});
