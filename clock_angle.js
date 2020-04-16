const rl = require('readline');
const ip = rl.createInterface({input: process.stdin, output:process.stdout});
var a;

ip.on('line', (ans) => {
    a = ans.split(" ").map(n => Number(n));
});

function clock_angle(h,m){
    return 6*m-(0.5*(60*h + m)) < 0 ? 360 + (6*m-(0.5*(60*h + m))) : 6*m-(0.5*(60*h + m))
}




ip.on('close', () => {console.log(clock_angle(a[0],a[1]))})
