const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {a = ans.split(' ').map(n => Number(n))});

function Perf_sqr(m,n){
    var num = m*n;
    var rt = Math.sqrt(num);
    if(rt-Math.floor(rt)==0){
        console.log('yes');
    }
    else{
        console.log('no')
    }
}

ip.on('close', () => {Perf_sqr(a[0],a[1])})
