const details = [
    {detail: "Address: Vasundhara"},
    {detail: "Phone No: 9887766578"}
]
const items = [
    { item: "1. Hakka Noodles"},
    { item: "2. Pasta"}
]

const prices = [
    {price: "Hakka Noodles: 250"},
    {price: "Pasta: 150"}
]

function userdetails(){
    console.log("Food Delivery System!!");
    console.log("User Details for Delivery!");
    details.forEach((detail, index) => {
        console.log(detail.detail);
    })
}
function fooditems(){
    console.log("\nItems you Added!");
    items.forEach((item, index) => {
        console.log(item.item);
    })
}

function itemsprice() {
    console.log("\nPrice of Added Items!");
    prices.forEach((price, index) => {
        console.log(price.price);
    })
}

function deliverydetails(detail) {
    return new Promise((resolve, reject) => {
        details.push(detail);
        const error = false;
        if(!error) {
            resolve();
        } else {
            reject('Error: Something went wrong!')
        }
    });
}

function additems(item) {
    return new Promise((resolve, reject) => {
        items.push(item);    
        const error = false;    
        if(!error) {
            resolve();
        } else {
            reject('Error: Something went wrong!')
        }
    });
}

function itemprice(price) {
    return new Promise((resolve, reject) => {
        prices.push(price);
        const error = false;
        if(!error) {
            resolve();
        } else {
            reject('Error: Something went wrong!')
        }
    });
}

async function fooddelivery() {
    await additems({item: "3. Pizza"});
    await itemprice({price: "Pizza: 450"});

    userdetails();
    fooditems();
    itemsprice();
}
fooddelivery();