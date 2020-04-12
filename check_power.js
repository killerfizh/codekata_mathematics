const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;

ip.on('line', (ans) => {
    a = ans.split(' ').map(n => Number(n));
});

function check_power(num) {
    count = 0;
    for(i=0; i<num[0]; i++){
        if (Math.pow(num[1],i) == num[0]){
            count++;
        }
    }
    return count == 1 ? console.log('yes') : console.log('no')
  }

ip.on('close', () => {check_power(a)});
