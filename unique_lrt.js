const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a;
ip.on('line', (ans) => {
    a = ans.split('');
});
function unique_letter(str){
    var unq = [];
    var unique;
 for(i of new Set(str)){
    unq.push(i)
 }
unique = unq.join('')
var count = 0;
var res = 0;
for(i=0; i<str.length; i++){
    count = 0;
    for (j=0; j<str.length; j++){
    if (str[i]==str[j]){
        count++
    }
}
    if (count == 1){
        res++
    }
}

return res;
     
 }


ip.on('close', () => {console.log(unique_letter(a)? unique_letter(a):'-1')})
