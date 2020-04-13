const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = ans.split('').map(n => Number(n));
});

function sum_sqr_dig(num){
    count = 0;
    for(i of num){
        count += Math.pow(i,2)
    }
    return count
}

ip.on('close', () => {console.log(sum_sqr_dig(a))})
