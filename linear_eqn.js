const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var p,a,b,x;

ip.on('line', (ans) => {
    p = ans.split(' ').map(n => Number(n) );
    a = p[0];
    b = p[1];
    x = p[2]
});

function linear_eqn(a,b,x){
   return a*x + b;

};

ip.on('close', () => {console.log(linear_eqn(a,b,x))});
