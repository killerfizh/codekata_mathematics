const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a,b;
var count = 0;
ip.on('line', (ans) => {
    if (count === 0){
        a = parseInt(ans);
        count++;
    }
    else if (count ==1){
        b = ans.split(' ').map(n => Number(n)).splice(0,a+1);
        count++;
    }
    else{
        return
    }

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

function lcm_n(lst){
    var p,q,lcm;
    p = lst[0];
    q = lst[1];
    lcm = general_lcm(p,q);

    for(i = 2; i < lst.length; i++){
        lcm = general_lcm(lcm, lst[i])
    }
    return lcm
}

ip.on('close', () => {console.log(lcm_n(b))})
