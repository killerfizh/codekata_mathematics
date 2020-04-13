const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = ans.split(' ').map(n => Number(n));
});

function general_lcm(a,b){
    var num,den,rem,gcd,lcm;
    if(a>b){
        num = a;
        den = b;
    }
    else{
        num = b;
        den = a;
    }
    rem = num % den;
    while(rem !== 0){
        num = den;
        den = rem;
        rem = num % den;
    }
    gcd = den;
    lcm = parseInt(parseInt(a*b)/parseInt(gcd));
    return lcm
    
}

ip.on('close', () => {console.log(general_lcm(a[0],a[1]))})
