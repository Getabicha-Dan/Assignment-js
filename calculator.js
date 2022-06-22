/*Write a simple calculator program that calculates 
the difference, sum or product of two numbers. 

The function takes as a parameter, the type of calculation to perform and two numbers.

Then based on the type of calculation given 
(addition, subtraction, multiplication, division), 
it performs the calculation and returns the result.  */




function calculator(typeCalculation,x,y){

    if(typeCalculation === 'Sum'){

        return x + y ;
      
    } else if(typeCalculation === 'Diffrence'){

        return x - y ;
    
    } else if (typeCalculation==='Product'){

       return x * y ;
       
    } else if(typeCalculation === 'Division'){

       return  x / y ;
       
    }
}

calculator('Diffrence',3,6);


