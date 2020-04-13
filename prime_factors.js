const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans)=> {
    a = parseInt(ans);
});

function Sieve(n){
    prime = [];
    for (var i=0; i<n+1; i++){
      prime.push(true);
    }
    var p=2;
    while (p*p < n+1){
      if (prime[p] == true){
        for (var j = p*p; j < n+1; j+=p){
          prime[j] = false;
        }
      }
      p+=1;
    }
    return prime[n] ? 'yes':'no'
    
}

function prime_fact(num){
    lst = []
    for(i=2; i<=num; i++){
        if (num % i === 0 && Sieve(i) == 'yes' && num <=100000 && num >= 2){
            lst.push(i)
        }
    }
    return lst.join(' ')
}

ip.on('close', () => {console.log(prime_fact(a))})
