const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;

ip.on('line', (ans) => {
    a = ans.split(' ').map(n => Number(n));
});

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else if (num<10000){
        return (num * factorialize(num - 1));
    }
  }

ip.on('close', () => {
    if (a[0]-a[1] <= 5){
    console.log(factorialize(a[0])/factorialize(a[1]))}});
