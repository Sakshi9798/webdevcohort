const cart=["pencil", "laptop", "charger"]
api.createOrder(cart, function(){
    api.payment(function(){
        api.showsummary(function(){
            api.showRemainingBalance()
        })
    })
})

