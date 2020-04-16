const rl = require('readline');
const ip = rl.createInterface({input: process.stdin, output:process.stdout});
var a,b;
var count = 0;

ip.on('line', (ans) => {
    if (count === 0){
    a = ans.split(" ").map(n => Number(n));
    count++;
}
else if (count == 1){
    b = ans.split(" ").map(n => Number(n)).splice(0, a[0]+1);
    count++;
}
else{
    return
}
});
function rotated_array(arr, count){
    count -= arr.length * Math.floor(count / arr.length);
    arr.push.apply(arr, arr.splice(0,count));
    return arr.join(" ")
}




ip.on('close', () => {console.log(rotated_array(b,a[1]))})
