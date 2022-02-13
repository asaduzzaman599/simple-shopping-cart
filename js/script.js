function updateMobilePrice(product, price, num) {
    const productNumber = document.getElementById(product + '-number');
    const productNumberValue = Number(productNumber.value);
    if (!num && productNumberValue > 0) {
        productNumber.value = productNumberValue - 1;
    } else if (num) {
        productNumber.value = productNumberValue + 1;

    }
    console.log(productNumberValue);

    const updatePhonePrice = productNumber.value * price;

    document.getElementById(product + '-total').innerText = updatePhonePrice;

    updateTotalPrice();

}

function updateTotalPrice(){
    const totalMobilePrice = getProductPrice('phone');
    const totalCasePrice = getProductPrice('case');
    const totalPrice = totalCasePrice + totalMobilePrice;
    console.log(totalPrice);
}

function getProductPrice(product){
    return Number(document.getElementById(product + '-total').innerText);
}

document.getElementById('phone-plus').addEventListener('click', function () {
    updateMobilePrice("phone", 1219, true);

});

document.getElementById("phone-minus").addEventListener('click', function () {
    updateMobilePrice("phone", false);
})

document.getElementById('case-plus').addEventListener('click', function () {
    updateMobilePrice("case", 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateMobilePrice("case", 59, false);
})