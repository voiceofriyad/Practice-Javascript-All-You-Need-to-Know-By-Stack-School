var str = '1000.56';
var n = 10;

console.log(str * n);
console.log(str + n);

console.log(Number(str));
console.log(Number.parseInt(str));
console.log(parseInt(str));

console.log(n.toString());


console.log(Number(Infinity));
console.log(String(Infinity));
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));



console.log(Boolean(''));
console.log(Boolean('abcde'));

console.log(Boolean(null));
console.log(Boolean(undefined));

console.log(Boolean(0));
console.log(Boolean(452));


var str1 = 'This is a simple text';
var str2 = 'Another text';

var sub = str1 - str2;

console.log(typeof(sub), sub);