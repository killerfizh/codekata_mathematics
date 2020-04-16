const rl = require('readline');
const ip = rl.createInterface({input: process.stdin, output:process.stdout});
var a,b;
var count = 0;

ip.on('line', (ans) => {
    if (count === 0){
    a = ans;
    count++;
}
else if (count == 1){
    b = ans;
    count++;
}
else{
    return
}
});
function max_marks(m,n){

    let new_m = m.replace(/[^a-zA-Z0-9]/g, " ").split(" ");
    let new_n = n.replace(/[^a-zA-Z0-9]/g, " ").split(" ");
    
    let count_m = (new_m.slice(1).map(n => Number(n))).reduce((a,b) => a+b);
    let count_n = (new_n.slice(1).map(n => Number(n))).reduce((a,b) => a+b);
    return count_m > count_n ? new_m[0] :new_n[0]
}




ip.on('close', () => {console.log(max_marks(a,b))})
