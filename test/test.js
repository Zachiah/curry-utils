const {add,sub,mult,div, pow, div_, sub_, pow_} = require('../index.js');
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

describe("pow", function() {
    it("works", function() {
        assert.strictEqual(pow(2)(3), 9);
        assert.deepStrictEqual([1,2,3].map(pow(2)), [1,4,9]);
    })
})

describe("div_", function() {
    it("works", function() {
        assert.strictEqual(div_(4)(2), 2);
        assert.deepStrictEqual([1,2,3].map(div_(6)), [6,3,2]);
    });
});

describe("sub_", function() {
    it("works", function() {
        assert.strictEqual(sub_(4)(2), 2);
        assert.deepStrictEqual([1,2,3].map(sub_(3)), [2,1,0]);
    })
});

describe("pow_", function() {
    it("works", function() {
        assert.strictEqual(pow_(3)(2), 9);
        assert.deepStrictEqual([1,2,3].map(pow_(2)), [2,4,8])
    })
})