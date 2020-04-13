const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;

ip.on('line', (ans) => {
    a = ans.split('').map(n => Number(n));
});

function sum_powers_digits(num) {
    var ln = num.length
    var res = 0;
    for(i of num){
        res += Math.pow(i, ln)
    }
    return res
    }

ip.on('close', () => {console.log(sum_powers_digits(a))});
