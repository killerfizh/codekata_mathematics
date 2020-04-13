const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;

ip.on('line', (ans) => {
    a = ans.split(' ').map(n => Number(n));
});

function min_divisor(num) {
    lst = []
    for (i = 2; i < num.sort(function(a,b){return a-b})[1]; i++){
        if (num[0] % i === 0 && num[1] % i === 0){
            lst.push(i)
        }
    }
    return lst.sort(function(a,b){return a-b})[0]
    }

ip.on('close', () => {console.log(min_divisor(a))});
