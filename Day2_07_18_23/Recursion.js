let count=1;
function fizzBuzz(c)
{
    if(c!=101)
    {
            if(c%3===0 && c%5===0){
        console.log("FizzBuzz");
        
    }
    else if(c%3===0){
        console.log("Fizz");
    }
    else if(c%5===0){
        console.log("Buzz");
    }
   else{
        console.log(c);
          
      
   }
    fizzBuzz(c+1);
        
}

    else{
        console.log("completed")
    }

    
}
fizzBuzz(count);
