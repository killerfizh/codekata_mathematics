const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {a = ans.split(' ').map(e => Number(e))});

function eveodd_check(n){
    var count = 0;
    for (i = 0; i<n.length; i++){
        count += n[i]
    }
    if (count % 2 === 0){
       console.log('even')
    }
    else{
        console.log('odd')
    }
}
ip.on('close', () => {eveodd_check(a)})
