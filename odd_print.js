const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {a = ans.split('').map(e => Number(e))});

function odd_print(n){
    var count = [];
    var temp = 0;
    for (i = 0; i<n.length; i++){
        
    if (n[i] % 2 !== 0){
       count.push(n[i])
    }
    else{
        temp++
    }
}
if (temp !== n.length){
    return count.join(' ')
}  
else{
    return -1
}
}

ip.on('close', () => {console.log(odd_print(a))})
