const {add,sub,mult,div} = require('../index.js');
const assert = require('assert');

describe("add", function() {
    it("works", function() {
        assert.strictEqual(add(4)(5), 9);
        assert.deepStrictEqual([4,5,6].map(add(3)), [7,8,9])
    })
});

describe("sub", function() {
    it("works", function() {
        assert.strictEqual(sub(2)(3), 1);
        assert.deepStrictEqual([4,5,6].map(sub(2)), [2,3,4])
    })
});

describe("mult", function() {
    it("works", function() {
        assert.strictEqual(mult(2)(3),6);
        assert.deepStrictEqual([1,2,3].map(mult(2)), [2,4,6]);
    });
});

describe("div", function() {
    it("works", function() {
        assert.strictEqual(div(2)(6),3);
        assert.deepStrictEqual([2,4,6].map(div(2)), [1,2,3]);
    });
});