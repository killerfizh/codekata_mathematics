const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a,p,b;
ip.on('line', (ans) => {a = parseInt(ans)});

function rnd(n){
    p = (Math.ceil(n / 10)) * 10;
    b = p + 10;
    return n - p > b - n ? b : p
}
ip.on('close', () => {console.log(rnd(a))})
