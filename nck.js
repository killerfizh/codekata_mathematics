const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a,n,k;

ip.on('line', (ans) => {
    a = ans.split(' ').map(n => Number(n));
    n = a[0];
    k = a[1];
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

  function nck(n,k){
      return factorialize(n) / (factorialize(n-k)*factorialize(k))
  }


ip.on('close', () => {console.log(nck(n,k))});
