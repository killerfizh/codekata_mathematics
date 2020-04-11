const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans)=> {a = parseInt(ans)});
function palcheck(n){
    var rev = 0;
    var i = n;
    while (i>0){
        rev = rev * 10 + i % 10;
        Math.floor(i / 10);
        return (n == rev)
    }
};
function palcount(a){
    count = 0;
    for (i = 0; i<=a; i++){
        if (palcheck(i)){
            count++;
        }
    }
    return count
}

ip.on('close', ()=> {console.log(palcount(a))})
