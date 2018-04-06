'use strict';
let expect = require('chai').expect;

let DesignPattern = require('../../dist/design-pattern/design-pattern.module');

describe('[Factory Method] Create - X5', () => {
    it('Should create a X5', () => {
        let factory = DesignPattern.Factory;
        let x5 = factory.create(DesignPattern.BmwTypes.X5)
        expect(typeof x5).to.equal(typeof new DesignPattern.X5());
    });
});

describe('[Factory Method] Create - X6', () => {
    it('Should create a X6', () => {
        let factory = DesignPattern.Factory;
        let x6 = factory.create(DesignPattern.BmwTypes.X6)
        expect(typeof x6).to.equal(typeof new DesignPattern.X6());
    });
});

describe('[Factory Method] Create - 404', () => {
    it('Should throw an error', () => {
        let factory = DesignPattern.Factory;
        let type = "404";
        expect( () => factory.create(type) )
        .to.throw(`Type error : [${type}] not supported`);
    });
});