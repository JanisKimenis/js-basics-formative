storage=[
    item1={
        name: "orange",
        category: "food",
        price: 2.49,
        amount: 45
    },
    item2={
        name: "orange spray-paint",
        category: "decor",
        price: 12.99,
        amount: 15
    },
    item3={
        name: "orange mouse",
        category: "electronics",
        price: 7.99,
        amount: 7
    },
    item4={
        name: "orange keyboard",
        category: "electronics",
        price: 24.99,
        amount: 5
    }
]
function electornicsCheck(){
    for(i = 0; storage.length > i; i++){
        if(storage[i].category == "electronics"){
            console.log("Electronic item: " + storage[i].name)
        } 
    }
}
function totalStorageValue(){
    totalValue = 0;
    for(i = 0; storage.length > i; i++){
        totalValue = totalValue + (storage[i].price * storage[i].amount);
    }
    console.log("Stores total value is: " + totalValue + " EUR")
}
electornicsCheck();
totalStorageValue();
