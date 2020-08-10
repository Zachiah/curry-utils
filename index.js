// Advanced
exports.flip = (a) => (b) => (c) => (a(c)(b));

// Arithmatic
exports.add = (a) => (b) => (b + a);
exports.mult = (a) => (b) => (b * a);
exports.sub = (a) => (b) => (b - a);
exports.div = (a) => (b) => (b / a);
exports.pow = (a) => (b) => (b ** a);

// Simple Boolean
exports.eq = (a) => (b) => (b === a);
exports.lt = (a) => (b)  => (b < a);
exports.lteq = (a) => (b) => (b <= a);
exports.gt = (a) => (b) => (b > a);
exports.gteq = (a) => (b) => (b >= a);