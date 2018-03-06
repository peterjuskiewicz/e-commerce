
window.onload = basketTest;

// function that will get an array object from local storage and
// insert product object into the cart table

function basketTest(){

// test objects - will be removed once database funcionality works
var testObject = {
    productId: 1923,
    productName: 'testName',
    imagePath: 'assets/images/cart-img.jpg',
    unitPrice: 999
}

var testObject2 = {
    productId: 1111,
    productName: 'testName2',
    imagePath: 'assets/images/cart-img.jpg',
    unitPrice: 199
}

var arrayOfObjects = [];

arrayOfObjects.push(testObject);
arrayOfObjects.push(testObject2);


localStorage.setItem('testProduct', JSON.stringify(arrayOfObjects));




// the program starts here

lengthOfArray = JSON.parse(localStorage.getItem('testProduct')).length;



    function insertTableRow(length){

    let imgSource, productName, unitPrice, productId;

    let table = ""

    const cartTable = document.getElementById('cart-table');

    let retrivedObject = JSON.parse(localStorage.getItem('testProduct'));

    // create table row element
    for(var i = 0; i < length; i++){

        imgSource = retrivedObject[i].imagePath;
        productName = retrivedObject[i].productName;
        unitPrice = retrivedObject[i].unitPrice;
        productId = retrivedObject[i].productId;

        var totalPrice = unitPrice * 2;

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


    cartTable.innerHTML = table;
    }
    insertTableRow(lengthOfArray);
}

