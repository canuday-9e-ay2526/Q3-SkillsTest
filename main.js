
//Variable declaration
const adminFee = 50.00;
const price = 250;
let qty = document.getElementbyID("quantity").value;
let subtotal = Number(qty * price);
let total = Number(qty * price + adminFee);
//display answer
function getPrice(){
document.getElementById(subtotal).value = subtotal.toFixed(2);
document.getElementById(total).value = total.toFixed(2);
}
