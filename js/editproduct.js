window.onload = editProduct;


//function that will display products index.html

function editProduct() {

    var productsList = document.getElementById('products-display');

    fetch('../php/editproduct.php')
    .then(function(response){
        return response.json();
    })
    .then(function(response){

        var content = '<p class="font-16 font-bold text-uppercase mar-bot-20">edit product</p>';

        for(var i = 0; i < response.length; i++){

            var product = `<div class="pro-item col-md-3 col-sm-3 " id="${response[i]._id.$id}">
            <a href="details2.html">
            <img src="${response[i].productImagePath}" alt="" class="img-responsive"></a>
            <p class="font-15">${response[i].productName}</p>
            <p class="font-15 orange font-bold"><del class="light-grey lighter">
            ${response[i].productPrice * 2}</del>${response[i].productPrice}</p>
            <div class="clearfix"> <a class="cart" href="#">Edit</a> </div>
            <div class="clearfix"> <a class="cart" href="#">Remove</a> </div>
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