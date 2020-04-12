const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;

ip.on('line', (ans) => {
    a = parseInt(ans);
});

function list_factors(num) {
    count = [];
    for(i=1; i<=num; i++){
        if (num % i === 0){
            count.push(i);
        }
    }
    return count.join(' ')
  }

ip.on('close', () => {console.log(list_factors(a))});
