window.onload = editProduct;

// display products

function editProduct() {

    var productsList = document.getElementById('products-display');

    fetch('../php/editproduct.php')
    .then(function(response){
        return response.json();
    })
    .then(function(response){

        var content = '';

        for(var i = 0; i < response.length; i++){

            var product = `<div class="pro-item col-md-3 col-sm-3 " id="${response[i]._id.$id}">
            <a href="details2.html">
            <img src="${response[i].productImagePath}" alt="" class="img-responsive"></a>
            <p class="font-15">${response[i].productName}</p>
            <p class="font-15 orange font-bold"><del class="light-grey lighter">
            ${response[i].productPrice * 2}</del>${response[i].productPrice}</p>
            <div class="clearfix"> <button class="cart" onclick="editProduct('${response[i]._id.$id}')">Edit</button> </div>
            <div class="clearfix"> <button class="cart" onclick="deleteProduct('${response[i]._id.$id}')">Delete</button> </div>
            </div>
            </div>
            `
            content += product;
        }
        productsList.innerHTML = content;
        console.log(response);
    })
    .catch(function(e){
        console.log(e);
    })


}

function deleteProduct(id) {

console.log(id);

fetch('../php/deleteproduct.php', {
            method: 'POST',
            body: 'id=' + id,
            headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
        .then(res => {
            console.log(res);
            location.reload();
        })
        .catch(error => console.error('Error:', error));




}