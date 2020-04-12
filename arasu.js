const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans)=> {
    a = parseInt(ans);
});

function arasu(n){
    var lst = [];
    for(i=1; i<=n; i++){
     lst.push(Math.pow(i,2)+1)
}
return lst.join(' ')
}

ip.on('close', () => {console.log(arasu(a))})

