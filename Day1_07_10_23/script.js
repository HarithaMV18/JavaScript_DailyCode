let num=prompt("please enter a number to get series of prime numbers");
let count=0;
let ele=document.getElementById("prime");


console.log()
for(prime=num;prime>=2;prime--){
    
    for(i=2;i<=prime;i++){
        
        if(prime%i==0){
            count++;
        }
   
    }
    if(count==1){
        ele.insertAdjacentHTML("afterend",prime+"</br>")
    }
    count=0;

}

