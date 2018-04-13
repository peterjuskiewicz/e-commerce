let productsList = document.getElementById('products_list');
let search = document.getElementById('search-field');

window.onload = buildTable;

//function that will allow to search products by name

function buildTable() {
//Create recommender object - it loads its state from local storage
    let recommender = new Recommender();

    showRecommendation();

// Search function that will send request to the server and insert the object response to the list of products

    search.addEventListener('keydown', (e) => {
        if(e.key == 'Enter'){


// Remove default behaviour
            e.preventDefault();

            let searchProduct = search.value;

            recommender.addKeyword(searchProduct);

// AJAX request
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
            showRecommendation();
            productsList.innerHTML = response;

            })

            }
    })
}

// Function that by default will output random product to the recommendation element or if the user
// was alredy searching products it will output the product that was searched the most times

function showRecommendation() {

//Create recommender object - it loads its state from local storage
    let recommender = new Recommender();

    let recommendation = document.getElementById('recommendation');
    let recommendedProduct = recommender.getTopKeyword();
    console.log(recommendedProduct);

    if (recommendedProduct === ''){
        recommendation.innerHTML = `<div class=""> <img src="assets/images/b-14.jpg" alt="" class="img-responsive" ><br>
            <p class="font-15">Test V-neck Blue Shirt</p>
            <img src="assets/images/star-rating.png" alt="" class="img-responsive mar-bot-7">
            <p class="font-15 orange font-bold"><del class="light-grey lighter">£49.00</del>£20.00</p>
            </div>`;
    }else{
            fetch('../php/recommendation.php', {
                method: 'POST',
                body: 'name=' + recommendedProduct,
                headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
                })
            })
            .then(function(response){
            return response.text();
            })
            .then(function(response){
            console.log(response);
            recommendation.innerHTML = response;
            })
            .catch(function(e){
                console.log(e);
            })
    }
}

// function that will add the product to localStorage basket

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

}

