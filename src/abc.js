let a = 1;
let b = 2;
a = [b, (b = a)][0];
console.log('a, b:', a, b);
