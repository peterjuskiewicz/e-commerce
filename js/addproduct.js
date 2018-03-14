window.onload = addProduct;

function addProduct() {

    var addButton = document.getElementById('add-button');


    addButton.addEventListener('click', () => {

        var addName = document.getElementById('name-add').value;
        var addDescription = document.getElementById('description-add').value;
        var addPrice = document.getElementById('price-add').value;
        var addSize = document.getElementById('size-add').value;
        var addImagePath = document.getElementById('image-path-add').value;
        var data = {productName: addName,
                    productDescription: addDescription,
                    productPrice: addPrice,
                    productSize: addSize,
                    productImagePath: addImagePath};

            const url = '../php/addproduct.php';



        console.log(data);

        fetch(url, {
            method: 'POST',
            body: 'data=' + JSON.stringify(data),
            headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
        .then(res => {
            console.log(res);
            location.reload();
        })
        .catch(error => console.error('Error:', error))
        // register new user

    });


    }
