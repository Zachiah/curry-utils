const {add,sub} = require('../index.js');
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