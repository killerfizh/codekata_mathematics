const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = ans.split('').map(n => Number(n));
});

function digit_power(num){
    count = 0;
    for(i=0; i<num.length; i++){
        count += Math.pow(num[i], i)
    }
    return count
}
ip.on('close', () => {console.log(digit_power(a))})
