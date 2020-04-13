const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = ans.split('').map(n => Number(n));
});
function maxnum(num) {
    return num.sort(function(a,b){return b-a}).join('')
  }

ip.on('close', () => {console.log(maxnum(a))});
