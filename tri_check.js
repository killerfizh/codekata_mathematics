const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a,p,q,r;
ip.on('line', (ans)=> {
    a = ans.split(' ').map(n => Number(n));
    p = a[0];
    q = a[1];
    r = a[2];
});

function tri_check(a,b,c){
    return a+b<=c || a+c<=b || b+c<=a ? 'no' : 'yes'
}

ip.on('close', () => {console.log(tri_check(p,q,r))})
