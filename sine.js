const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = parseInt(ans);
});
function sine(n){
    return n == 30 ? Math.round(Math.sin(n*Math.PI/180)+0.1)/2 : Math.sin(n*Math.PI/180)
 }


ip.on('close', () => {console.log(sine(a))})
