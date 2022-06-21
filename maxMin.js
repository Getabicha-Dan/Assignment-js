/*Max/Min
Write a function that takes three numbers and write two more functions 
which calculate and return the largest and smallest of these numbers.
The first function should print what is returned from 
the functions largest and smallest. */


function minMax(x,y,z){
    let max = largest(x,y,z);
    console.log(max + ' is the max number');
    
    let min = smallest(x,y,z);
    console.log(min +' is the min number');
}
  
function largest(x,y,z){    
    if( x > y && x > z){ 

        theNumber = x;

    } else if ( y > x && y > z){

        theNumber = y;

    } else {

        theNumber = z;
   }

   return theNumber;
}

function smallest(x,y,z){
    
    if(x < y && x < z){

        theNumber = x

       } else if(y < x && y < z){

        theNumber = y

       }else{
        
        theNumber = z
       }
    return theNumber;
}

minMax(4,5,9);







