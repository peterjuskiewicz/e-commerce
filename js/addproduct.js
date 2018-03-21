window.onload = addProduct;

function addProduct() {

    let addButton = document.getElementById('add-button');


    addButton.addEventListener('click', () => {

        let addName = document.getElementById('name-add').value;
        let addDescription = document.getElementById('description-add').value;
        let addPrice = document.getElementById('price-add').value;
        let addSize = document.getElementById('size-add').value;
        let addImagePath = document.getElementById('image-path-add').value;
        let data = {productName: addName,
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
