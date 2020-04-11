const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {a = ans.split(' ').map(e => Number(e))});

function coprimes(m,n){
    if (m > n){
        var sml = n
    }
    else{
        sml = m
    }
    for(i = 1; i<sml+1; i++){
        if(m % i === 0 && n % i === 0){
            var cp = i;
        }
    }
    return cp == 1 ? 1:0
}
ip.on('close', () => {console.log(coprimes(a[0],a[1]))})
