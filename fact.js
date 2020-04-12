const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;

ip.on('line', (ans) => {
    a = Number(ans);
});

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else if (num<26){
        return (num * factorialize(num - 1));
    }
  }

ip.on('close', () => {console.log(factorialize(a))});
