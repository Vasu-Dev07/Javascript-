function placeOrder(callback){
    console.log("Payment is in Progress");

    setTimeout(()=>{
        console.log("Payment is Recieved and order is placed");
        callback();
    },3000)
}

function preparingOrder(){
    console.log("Your food preparation started..");

    setTimeout(()=>{
        console.log("Your order is now Prepared..");
    },3000)
}

placeOrder(preparingOrder);