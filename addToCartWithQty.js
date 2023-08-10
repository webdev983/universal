function addToCartWithQty(productId) {
    const qty = parseInt(document.getElementById('qty').value)
    let cart = getShoppingCart()
    if(!cart){
        cart = [{
            productId,
            qty:Math.min(qty,stockQty)
        }];
        localStorage.setItem('cart', JSON.stringify(cart))
        return 
    }
    const product = cart.find((item)=>item.productId === productId)
    if(product){product.qty =Math.min(qty+product.qty,stockQty) }
    else{
         cart.push({ productId,qty:Math.min(qty,stockQty) })
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    return 
}

function getShoppingCart() {
    let cart = localStorage.getItem('cart')
    if (cart) {
        return JSON.parse(cart)
    }
    return undefined
}