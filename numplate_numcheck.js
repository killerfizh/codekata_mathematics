const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans)=> {
    a = ans.split('');
});

function numplate_check(n){
    var num = ['0','1','2','3','4','5','6','7','8','9'];
    var count = 0;
    for (i=0; i<n.length; i++){
        if (num.includes(n[i])){
            count+=parseInt(n[i])
        }
    }
    return count
}
ip.on('close', ()=> {console.log(numplate_check(a))})
