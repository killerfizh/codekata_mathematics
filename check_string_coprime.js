const rl = require('readline');
const ip = rl.createInterface({input: process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {a = ans.split(" ")})

function coprime_check(m,n){
    if (m>n){
        let sml = n;
    }
    else{
        sml = m;
    }
    let hcf;
    for(let i = 0; i<=sml; i++){
        if(m%i === 0 && n%i === 0){
            hcf = i;
        }
    }
    return hcf==1 ? true : false
}

function cpcheck_string(str){
    return coprime_check(str[0].length, str[1].length) ? 'yes' : 'no'
}

ip.on('close', () => {console.log(cpcheck_string(a))})
