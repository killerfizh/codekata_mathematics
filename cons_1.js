const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans)=> {
    a = ans.split('').map(n=>Number(n));
});

function Cons_1(n){
    var count =1;
    for (i=1; i<n.length; i++){
        if (n[i-1] == n[i] && n[i] == 1){
            count++;
        }
    }
    if (count>1){
        return count
    }
    else{
        for (j=0; j<n.length; j++){
            if (n[j] !== 1){
                return -1
            }
        }
    }
}

ip.on('close', () => {console.log(Cons_1(a))})

