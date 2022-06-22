/*Shipping cost
You want to buy something from an online shop. 
The seller charges different prices for shipping cost based on location. 
The shipping cost is 5€ for EU,  15€ for US & Canada, 20€ else where. 
Write a function that takes the cost of the product and location. 
It should print the amount of money you have to pay as:
"You have to pay a total of 35€, 30€ for the product and 5€ for shipping"*/



let location;

function totalCost(productCost,location){
   
    if (location == 'EU') {

        let shippingCost = 5;
        tCost= productCost + shippingCost;
        console.log('You have to pay a total of ' + tCost+ '€ , ' + productCost +'€ for the product and ' + shippingCost+'€ for shipping.');
        
    } else if(location == 'US' || location == 'Canada') {

      let shippingCost=15;
        tCost = productCost + shippingCost;
        console.log('You have to pay a total of ' + tCost+ '€ , ' + productCost +'€ for the product and ' + shippingCost+ '€ for shipping.');

    }else{

        let shippingCost = 20;
        tCost=productCost + shippingCost;
        console.log('You have to pay a total of ' + tCost+ '€ , ' + productCost +'€ for the product and ' + shippingCost+ '€ for shipping.');
    }
    return tCost;
}
totalCost(50,'Canada');

