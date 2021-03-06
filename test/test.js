const {add,sub,mult,div, pow, flip,gt,lt,lteq,gteq,eq, and, or, not} = require('../index.js');
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
});

describe("gt", function() {
    it("works", function() {
        assert.strictEqual(gt(3)(2), false);
        assert.deepStrictEqual([1,2,3,4,5,6,7,8].filter(gt(3)), [4,5,6,7,8]);
    });
});

describe("lt", function() {
    it("works", function() {
        assert.strictEqual(lt(3)(2), true);
        assert.deepStrictEqual([1,2,3,4,5,6,7,8].filter(lt(3)), [1,2]);
    });
});

describe("gteq", function() {
    it("works", function() {
        assert.strictEqual(gteq(3)(3), true);
        assert.deepStrictEqual([1,2,3,4,5,6,7,8].filter(gteq(3)), [3,4,5,6,7,8]);
    });
});

describe("lteq", function() {
    it("works", function() {
        assert.strictEqual(lteq(4)(3), true);
        assert.deepStrictEqual([1,2,3,4,5,6,7,8].filter(lteq(3)), [1,2,3]);
    });
});

describe("eq", function() {
    it("works", function() {
        assert.strictEqual(eq(4)(4), true);
        assert.deepStrictEqual([1,2,3,4,4,5,6,7,7,8,9].filter(eq(4)), [4,4]);
    });
});

describe("flip", function() {
    it("works", function() {
        assert.strictEqual(flip(sub)(3)(2), 1);
        assert.deepStrictEqual([1,2,3].map(flip(div)(6)), [6,3,2]);
    })
});

describe("and", function() {
    it("works", function() {
        assert.strictEqual(and(gt(7))(lteq(8))(8), true);
        assert.deepStrictEqual(
            [0,1,2,3,4,5,6,7,8,9,10,11,12,13].filter(
                and(gt(7))(lt(7))
            ), []
        );
    });
});

describe("or", function() {
    it("works", function() {
        assert.strictEqual(or(gt(7))(lt(7))(7), false);
        assert.deepStrictEqual([0,1,2,3,4,5,6,7,8,9,10].filter(
            or(gt(3))(lt(3))
        ), [0,1,2,4,5,6,7,8,9,10]);
    });
});

describe("not", function() {
    it("works", function() {
        assert.strictEqual(not(gt(7))(8), false);
        assert.deepStrictEqual([0,1,2,3,4,5].filter(not(gt(2))), [0,1,2]);
    })
});