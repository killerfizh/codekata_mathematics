const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;

ip.on('line', (ans) => {
    a = Number(ans);
});

function ceil(n){
   return n*(n+1);

};

ip.on('close', () => {console.log(ceil(a))});
