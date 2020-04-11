const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans)=> {a = ans.split('').map(n => Number(n))});
function prod_ele(n){
    prod = 1;
    for (i=0; i<n.length; i++){
        prod *= n[i]
    }
    return prod
}

ip.on('close', () => {console.log(prod_ele(a))})
