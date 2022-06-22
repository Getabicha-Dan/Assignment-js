/*Write a function that takes a ph value and 
returns whether the value is acidic, neutral or alkaline. 
(PH value < 7 is acidic, 7 is neutral, > 7 alkaline)*/

function elementProperty(ph){

    
    if(ph > 7 && ph < 14){

        element = 'alkaline';

    } else if(ph < 7 &&  ph > 0){

      element = 'acidic';
    } else if(ph === 7){ 

      element = 'neutral';

    }else{
      element ='inavlid'}

    return element;
}

elementProperty(9);
