let f1=0;
let f2=1;
let f3=0;
let fibonacciArr=[];
function fibonacciSeries(num){
    for(let i=0;i<num;i++){
        fibonacciArr.push(f3);
        f3=f1+f2;
        f1=f2;
        f2=f3
        
        
    }
    
}
fibonacciSeries(10);
console.log(fibonacciArr)
