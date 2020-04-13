const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;

ip.on('line', (ans) => {
    a = parseInt(ans);
});

function coprimes(l,m,n){
    if (m > n && l > n){
        var sml = n
    }
    else if (m < n && m < l){
        sml = m
    }
    else{
        sml = l;
    }
    for(i = 1; i<sml+1; i++){
        if(m % i === 0 && n % i === 0 && l % i === 0){
            var cp = i;
        }
    }
    return cp == 1 ? 1:0
}

function zx(num){
    lst = [];
    for (i=1; i<num; i++){
        for (j=i+1; j<num; j++){
            for(k=j+1; k<num; k++){
            if(coprimes(i,j,k)==1 && i+j+k == num){
                lst.push(i,k,j)
            }
            }
            break
            
        }
        break
    }
    return lst.length === 0 ? 0 : lst.join(' ') 

}
ip.on('close', () => {console.log(zx(a))})
