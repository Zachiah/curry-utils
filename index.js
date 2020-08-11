// Advanced
exports.flip = (a) => (b) => (c) => (a(c)(b));

// Arithmatic
exports.add = (a) => (b) => (b + a);
exports.mult = (a) => (b) => (b * a);
exports.sub = (a) => (b) => (b - a);
exports.div = (a) => (b) => (b / a);
exports.pow = (a) => (b) => (b ** a);

// Comparison
exports.eq = (a) => (b) => (b === a);
exports.lt = (a) => (b)  => (b < a);
exports.lteq = (a) => (b) => (b <= a);
exports.gt = (a) => (b) => (b > a);
exports.gteq = (a) => (b) => (b >= a);

// Boolean
exports.and = (a) => (b) => (c) => (b(c) && a(c));
exports.or = (a) => (b) => (c) => (b(c) || a(c));
exports.not = (a) => (b) => !a(b);