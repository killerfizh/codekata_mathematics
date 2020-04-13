const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = ans.split('').map(n => Number(n));
});

function sum_f_l(num){
    return num[0]+num[num.length-1]
}

ip.on('close', () => {console.log(sum_f_l(a))})
