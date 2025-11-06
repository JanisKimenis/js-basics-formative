function printTicketPrice(age, student){
if(age <= 6){
    console.log("Biļete ir par brīvu.")
}else if(student){
    console.log("Biļete ir par 5 EUR.")
}
else{
    console.log("Biļete ir par 10 EUR.")
}
}
printTicketPrice(12, true);
printTicketPrice(35, false);
