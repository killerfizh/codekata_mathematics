const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {a = ans.split('').map(n => Number(n))});

function grt_num(n){
    add = 0;
    mul = 1;
    res = 0; 
    for (i=0; i<n.length; i++){
        add += n[i];
        mul *= n[i];
        res = add+mul;
    }
    if (res == parseInt(n.join(''))){
        console.log('Great')
    }
    else{
        console.log('no')
    }
}

ip.on('close', () => {grt_num(a)})
