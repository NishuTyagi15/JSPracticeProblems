function addDetails(address, phoneNo, callback) {
    console.log("Food Delivery System!");
    callback("Address: "+address, "\nPhone Number: "+phoneNo)
}

function addItem(add, callback) {
    console.log("Items you Added");
    callback(["Hakka Noodles", "Pasta"])
}

function price(p1, p2, callback) {
    console.log("Price of Added Items");
    callback("Hakka Noodles: "+p1, "\nPasta: "+p2)
}

const foodDelivery = addDetails("Vasundhara", "9855477885",(val1, val2) => {
    console.log(val1, val2);
    addItem(val2, (arr)=>{
        console.log(arr);
        price("250", "150", (v1, v2) => {
            console.log(v1, v2);
            console.log("Items Added for delivery, will deliver in 15-20 mins!");
            console.log("ThankYou!");
        });
    });
});