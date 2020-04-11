const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {a = ans.split(' ').map(n => Number(n))});
function abmodc(a,b,c){
    return a * b % c
}

ip.on('close', () => {console.log(abmodc(a[0],a[1],a[2]))})
