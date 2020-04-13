const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a,p,ar;
ip.on('line', (ans) => {
    a = ans.split(' ').map(n => Number(n)).filter(Boolean);
    p = a[0];
    ar = a[1];
});

function check_rec(p,ar){
    var count = 0;
    var l,b;
    for (i=1; i<=p; i++){
        for(j = 1; j<=i; j++){
            if(2*(i+j) == p && i*j == ar){
                l = i;
                b = j;
                count++
            }
            
            
        }
    }
    return count == 1 ? 'yes' : 'no'
}

ip.on('close', () => {console.log(check_rec(p,ar))})
