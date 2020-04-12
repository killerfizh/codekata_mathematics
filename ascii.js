const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans)=> {
    a = ans.split('');
});

function ascii(n){
    count = 0;
    for (i = 0; i<n.length; i++){
        count += n[i].charCodeAt(0)
    }
    return count % 8 === 0 ? 1 : 0
}

ip.on('close', () => {console.log(ascii(a))})

