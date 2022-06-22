/*Leap year calculator. Write a function that takes a year and determines if it is a leap year or not
How to determine whether a year is a leap year 
To determine whether a year is a leap year, follow these steps:
1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
4. The year is a leap year (it has 366 days).
5. The year is not a leap year (it has 365 days).
(Source: https://docs.microsoft.com/en-us/office/troubleshoot/excel/determine-a-leap-year)*/

function leapCalcalculator(year){
    
    let condition1=evenlyDivisibelBy4(year);
    let condition2=evenlyDivisbelBy100(year);
    let condition3=evenlyDivisibelBy400(year);
   

if (condition1==0){
    condition2;
} else{
    console.log(' The year is not a leap year ')
}
if (condition2==0){
    condition3;
} else{
    console.log(' The year is not a leap year ')
    }
if(condition3==0){
    console.log(' The year is a leap year ')
} else{
    console.log(' The year is not a leap year ')
}
}


function evenlyDivisibelBy4(year){

    divideBy4 = year % 4;
    return divideBy4;
}


function evenlyDivisbelBy100(year){
    divideBy100 = year % 100;
    return  divideBy100;
}



function evenlyDivisibelBy400(year){
    divideBy400 = year % 400;
    return divideBy400;
}

leapCalcalculator(1920);





