const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var p,n,a,d;

ip.on('line', (ans) => {
    p = ans.split(' ').map(n => Number(n) );
    a = p[0];
    d = p[1];
    n = p[2]
});

function sum_ap(n,a,d){
   return n/2*(2*a+(n-1)*d);

};

ip.on('close', () => {console.log(sum_ap(n,a,d))});
