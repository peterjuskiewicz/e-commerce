
window.onload = basketTest;

// function that will get an array object from local storage and
// insert product object into the cart table

function basketTest(){

// find the lenght of array from local storage

let lengthOfArray = JSON.parse(localStorage.getItem('basket')).length;


// build the table

    function insertTableRow(length){

    let imgSource, productName, unitPrice, productId;

    let table = ""

    const cartTable = document.getElementById('cart-table');

// get the basket array from local storage

    let retrivedObject = JSON.parse(localStorage.getItem('basket'));

    // create table row element
    for(let i = 0; i < length; i++){

        imgSource = retrivedObject[i].productImagePath;
        productName = retrivedObject[i].productName;
        unitPrice = retrivedObject[i].productPrice;
        productId = retrivedObject[i]._id.$id;

        let totalPrice = unitPrice * 2;

        let tableRow = `<tr id="${productId}">
                    <th scope="row">
                    <img src="assets/images/trash.png" alt=""></th>
                    <td><img src="${imgSource}" alt=""></td>
                    <td><p class="font-bold font-18">${productName}</p></td>
                    <td><img src="assets/images/edit.png" alt=""></td>
                    <td><input type="number" class="form-control" value="1"></td>
                    <td><p class="font-bold font-20">${unitPrice}</p></td>
                    <td><p class="pink font-bold font-20">${totalPrice}</p></td>
                    </tr>
        `
        table += tableRow;
    }

// insert table to the page

    cartTable.innerHTML = table;
    }
    insertTableRow(lengthOfArray);
}

const placeOrderButton = document.getElementById('place-order-button');

placeOrderButton.addEventListener('click', () => {

        const thankUMessage = document.getElementById('main');

        let customerId = sessionStorage.getItem('loggedUser');
        let productIdArray = [];
        let basket = JSON.parse(localStorage.getItem('basket'));

        for(let i = 0; i < basket.length; i++){
            productIdArray.push(basket[i]._id.$id);
        }
        console.log(productIdArray);
        //  add basket to orders in db
        const url = '../php/checkout.php';

        fetch(url, {
            method: 'POST',
            body: 'customerId=' + JSON.stringify(customerId) + '&'
            + 'data=' + JSON.stringify(productIdArray),
            headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
        .then(res => {
            res.text();
        })
        .then(res => {
            console.log(res);
            thankUMessage.innerHTML = `
                <div>Thank you for your order</div>
            `
        })
        .catch(error => console.error('Error:', error));


});




