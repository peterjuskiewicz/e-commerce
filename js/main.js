window.onload = buildTable;


//function that will allow to search products by name

function buildTable() {
var search = document.getElementById('search-field');

    search.addEventListener('keydown', (e) => {

        if(e.key == 'Enter'){

            var searchProduct = search.value;
            var productsList = document.getElementById('products_list');
            console.log(searchProduct);
            fetch('../php/insertProducts.php', {
                method: 'POST',
                body: 'name=' + searchProduct,
                headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
                })
            })
            .then(function(response){
            return response.text();
            })
            .then(function(response){
            console.log(response);
            productsList.innerHTML = response;
            })
            .catch(function(e){
                console.log(e);
            })
            }
    })
}

