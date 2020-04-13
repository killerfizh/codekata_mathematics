const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;

ip.on('line', (ans) => {
    a = parseInt(ans);
});

function check_pow_2(n) {
    var count = 0;
   for (i=0; i<n; i++){
       if(Math.pow(2,i) == n){
           count++;
       }
   }
   return count === 0 ? 'no' : 'yes'
}

ip.on('close', () => {console.log(check_pow_2(a))});
