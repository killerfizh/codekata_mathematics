const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = ans.split(' ').map(n => Number(n));
});

function sum_odd_range(a,b){
    count = 0;
    for (i = a; i<=b; i++){
        if(i % 2 !== 0){
            count+=i
        }
    }
    return count
}

ip.on('close', () => {console.log(sum_odd_range(a[0],a[1]))})
