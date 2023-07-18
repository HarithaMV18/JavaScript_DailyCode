function fibonacciSeries(num){
let f1=0;
let f2=1;
let f3=0;
let fibonacciArr=[];
    for(let i=0;i<num;i++){
        if(i===0){
          fibonacciArr.push(f1);
        }
        else if(i===1){
          fibonacciArr.push(f2);
        }
       else{
           f3=f1+f2
        f1=f2;
        f2=f3
        fibonacciArr.push(f3);

       }
     

        
        
    }
    return fibonacciArr;
}
let c=fibonacciSeries(10);
console.log(c)
