'use strict';
let expect = require('chai').expect;

let DesignPattern = require('../../dist/design-pattern/design-pattern.module');

describe('[Builder] Creation validation', () => {
    it('Should set the corresponging values', () => {
        let builder = DesignPattern.Builder();
        let test = builder
                    .var1(1)
                    .var2("2")
                    .var3(true)
                    .build();
        expect(test.var1).to.equal(1);
        expect(test.var2).to.equal("2");
        expect(test.var3).to.equal(true);
    });
});