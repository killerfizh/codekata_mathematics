const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {a = ans.split('').map(e => Number(e))});

function pure_num(n){
    var count = 0;
    for (i = 0; i<n.length; i++){
        count += n[i]
    }
    if (count % 3 === 0){
       console.log('yes')
    }
    else{
        console.log('not')
    }
}
ip.on('close', () => {pure_num(a)})
