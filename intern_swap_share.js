const rl = require('readline');
const ip = rl.createInterface({input: process.stdin, output:process.stdout});
var a,b,c;
var count = 0;

ip.on('line', (ans) => {
    if (count === 0){
    a = parseInt(ans);
    count++;
}
else if (count == 1){
    b = ans.split(" ").map(n => Number(n)).splice(0, a+1);
    count++;
}
else if (count == 2){
    c = ans.split(" ").map(n => Number(n)).splice(0, a+1);
    count++;
}
else{
    return
}
});

function share(m,n){
    let m_init = m.reduce((a,b) => a+b);
    let n_init = n.reduce((a,b) => a+b);
    
        
    
        let count = false;
        for(i of m){
            for(j of n){
                let new_sum_m = m_init-i+j;
                let new_sum_n = n_init-j+i;
                if (new_sum_m == new_sum_n){
                    count = true
                    break
                }
            }
            if (count == true){
                break
            }
        }
        return count ? 'yes' : 'no'
}




ip.on('close', () => {console.log(share(b,c))})
