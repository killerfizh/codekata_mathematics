const rl = require('readline');
const ip = rl.createInterface({input:process.stdin, output:process.stdout});
var a,b,c;
var count = 0;
ip.on('line', (ans) => {
    if (count === 0){
        a = ans.split(' ').map(n => Number(n));
        count++;
    }
    else if (count == 1){
        b = ans.split(' ').map(n => Number(n));
        count++;
    }
    else if (count == 2){

        c = ans.split(' ').map(n => Number(n));
        count++;
    }
    else{
        return
    }

});

function points_check(x1,y1,x2,y2,x3,y3){
    return Math.abs((y2-y1) / (x2-x1)) == Math.abs((y3-y2) / (x3-x2)) ? 'yes' : 'no'
}

ip.on('close', () => {console.log(points_check(a[0],a[1],b[0],b[1],c[0],c[1]))})


