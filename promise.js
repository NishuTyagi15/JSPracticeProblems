// function addDetails(address, phoneNo) {
//     new Promise((resolve, reject) => {
//         console.log("Food Delivery System");
//         const error = false;
//         if(!error) {
//             resolve();
//         } else {
//             reject("Error while Adding Items!");
//         }
//     })
// }

// function addItem(add) {
//     console.log("Items you Added");
// }

// function price(p1, p2,) {
//     console.log("Price of Added Items");
// }

// async function display() {
//     try {
//         const details = await addDetails("Vasundhara", "9876576674");
//         const items = await addItem(["Hakka Noodles", "Pasta"], details);
//         const price = await price("250", "150", items);
//     } catch (error) {
//         console.log("Invalid!");
//     }
// }
// display()

const details = [
    {detail: "Vasundhara"},
    {detail: "9887766578"}
]
const items = [
    { item: "Hakka Noodles"},
    { item: "Pasta"}
]

function userdetails(){
    details.forEach((detail, index) => {
        console.log(detail.detail);
    })
}
function fooditems(){
    items.forEach((item, index) => {
        console.log(item.item);
    })
}

function deliverydetails(detail){
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

function additems(item){
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

async function init(){
    await additems({ item: "Pizza"});

    userdetails();
    fooditems();
}
init();