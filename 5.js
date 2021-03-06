
var bignum = require('bignum');

var p = bignum('13407807929942597099574024998205846127479365820592393377723561443721764030073546976801874298166903427690031858186486050853753882811946569946433649006084171');
var g = bignum('11717829880366207009516117596335367088558084999998952205599979459063929499736583746670572176471460312928594829675428279466566527115212748467589894601965568');
var h = bignum('3239475104050450443565264378728065788649097520952449527834792452971981976143292558073856937958553180532878928001494706097394108577585732452307673444020333');

var ht = {};

var B = bignum('2').pow(20).toNumber();

for (var x = 1; x < B; x++) {
    console.log(x);
    var g = h.div(g.pow(x)).mod(p);
    ht[g] = x;
}

var quit = 0;

for (var x = 1; x < B && quit === 0; x++) {
    console.log(x);
    var y = g.pow(B).pow(x).mod(p);
    if (ht[y]) {
        console.log('x0 = ' + ht[y]);
        console.log('x1 = ' + x);
        var a = ht[y].pow(B).add(x).mod(p);
//        var a2 = a % p;
        console.log(a);
        quit = 1;
    }
}