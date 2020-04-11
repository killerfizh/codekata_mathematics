const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = parseInt(ans);
})


function savings(n) {
    var store = 1000;
    return n <= 1 ? 2000
         : n == 2 ? 4000
         : (savings(n - 1) + savings(n - 2))+store;
 }
 
 

ip.on('close', () => {console.log(savings(a))})
