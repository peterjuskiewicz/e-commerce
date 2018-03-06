window.onload = buildTable;


//function that will display products index.html

function buildTable() {

    var productsList = document.getElementById('products_list');

    fetch('../php/insertProducts.php')
    .then(function(response){
        return response.text();
    })
    .then(function(response){
        productsList.innerHTML = response;
    })
    .catch(function(e){
        console.log(e);
    })


}

