window.onload = buildTable;

//function that will allow to search products by name

function buildTable() {
let search = document.getElementById('search-field');

    search.addEventListener('keydown', (e) => {

        if(e.key == 'Enter'){

            let searchProduct = search.value;
            let productsList = document.getElementById('products_list');
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

function addToBasket(id){

    let basketArray;

    if(!localStorage.getItem('basket')){
        basketArray = [];
    } else {
        basketArray = JSON.parse(localStorage.getItem('basket'));
    }


    fetch('../php/searchProductById.php', {
                method: 'POST',
                body: 'id=' + id,
                headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
                })
            })
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(response){
        console.log(response);
        basketArray.push(response[0])
        localStorage.setItem('basket', JSON.stringify(basketArray));
    })
    .catch(function(e){
        console.log(e);
    })

    // let product = {'productId': id,
    //                'productName': 'x'}



    // localStorage.setItem('basket', )

}

