const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a,l,b,h;
ip.on('line', (ans)=> {
    a = ans.split('').map(n => Number(n));
});
function sum_sqr(n){
    var count = 0;
    for (i = 0; i<n.length; i++){
        count+=Math.pow(n[i],2);
    }
    return count;
}




ip.on('close', () => {console.log(sum_sqr(a))})

