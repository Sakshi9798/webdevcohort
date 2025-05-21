function getdeliverycharges(totalamount) {
    if(totalamount >=500) {
        return 0
    } else{
        return 50
    }
}
console.log(getdeliverycharges(600))