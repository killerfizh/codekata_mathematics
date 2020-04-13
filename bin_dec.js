const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = ans.split('').map(n => Number(n));
});
function bin_dec(num) {
    var count = 0;
    for(i=0; i<num.length; i++){
        count += num[num.length-(i+1)]*Math.pow(2,i)
    }
    return count
  }

ip.on('close', () => {console.log(bin_dec(a))});
