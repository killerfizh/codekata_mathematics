const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = ans.split('').map(n => Number(n));
});

function tri_angle_check(num){
    return num[0]+num[1]+num[2] <= 180 ? 'yes' : 'no'
}

ip.on('close', () => {console.log(tri_angle_check(a))})
