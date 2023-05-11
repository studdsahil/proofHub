// var n1=0,n2=1,next,i;
// var num = 10;
// for(i = 1;i<=num;i++){
//     console.log(n1);
//     next = n1 + n2;
//     n1 = n2;
//     n2 = next;
// }


let number  = 21;
let n1 = 0;
let n2= 1,next;

console.log(n1);
console.log(n2);
next = n1 +n2;
while(next <= number){
    console.log(next);
    n1 = n2;
    n2 = next;
    next = n1 + n2;
}
