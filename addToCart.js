
function addToCart(productId) {
    
    let cart = getShoppingCart()
    if(!cart){
        cart = [{
            productId,
            qty:Math.min(1,stockQty)
        }];
        localStorage.setItem('cart', JSON.stringify(cart))
        return 
    }
    const product = cart.find((item)=>item.productId === productId)
    if(product){product.qty =Math.min(product.qty+1,stockQty)}
    else{ cart.push({ productId,qty:Math.min(1,stockQty) })}
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