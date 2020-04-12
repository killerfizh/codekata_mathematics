const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans)=> {
    a = parseInt(ans);
});

function sum_pairs(n){
    count = 0;
    for (i = 1; i<n; i++){
        for (j=1; j< n; j++){
            if (i+j == n){count+=1}
        }
    }
    return count
}

ip.on('close', () => {console.log(sum_pairs(a))})

