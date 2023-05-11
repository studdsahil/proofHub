let sum = 0;
let sum2 = 0;
for(i = 1;i<=100;i++){
    if(i%2== 0){
        sum = sum +i;

    }
}
for(let i = 1;i<=100;i+=2){
    sum2 += i;
}
console.log(sum);
console.log(sum2);