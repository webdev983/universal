const backendUrl = 'https://5jfh1fonoh.execute-api.us-east-1.amazonaws.com/prod'
var stockQty = 0
window.addEventListener('load', async function () {
    const divElement = document.getElementById('stock-qty');

    
    const stockId = divElement.getAttribute('stockId');
    
    stockQty = await fetch(`${backendUrl}/stocks/${stockId}`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => parseInt(data.stockQty))
    console.log(stockQty)
    divElement.textContent = stockQty

    var buttons = document.querySelectorAll('.add-to-cart');

    // Loop through each button and remove the "disabled" attribute
    buttons.forEach(function (button) {
        if(stockQty>0){
            button.removeAttribute('disabled');
            button.innerHTML = 'Add to cart'
        }
        else{
            button.innerHTML = 'Out of stock'
        }
    });
    localStorage.setItem('stockQty',stockQty)
    
});