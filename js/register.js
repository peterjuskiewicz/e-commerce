window.onload = loginRegister;

function loginRegister() {

    let registerButton = document.getElementById('register-button');
    let loginButton = document.getElementById('login-button');

    let registerText1 = document.getElementById('register-text-1');
    let registerText2 = document.getElementById('register-text-2');

    let loginField = document.getElementById('login-field');


//  Change text depending if user is registered

    if(sessionStorage.getItem('loggedUser')) {
        registerText1.innerHTML = 'update details';
        registerText2.innerHTML = 'Want to update details?';
        registerButton.innerHTML = 'update';
        // For some reason it isn't working
        // CHECK CHECK CHECK CHECK CHECK
        loginField.setAttribute('visibility', 'hidden');
        loginField.setAttribute('opacity', 0);


    }else {
        registerText1.innerHTML = 'register';
        registerText2.innerHTML = 'Not registered yet? Please register';
        registerButton.innerHTML = 'register';
        loginField.setAttribute('visibility', 'visible');
        loginField.setAttribute('opacity', 1);
    }


    registerButton.addEventListener('click', () => {

        let registerName = document.getElementById('name-register').value;
        let registerAddress = document.getElementById('address-register').value;
        let registerEmail = document.getElementById('email-register').value;
        let registerPassword = document.getElementById('password-register').value;
        let registerRepeatPassword = document.getElementById('password-repeat-register').value;
        let data = {username: registerName,
                    userAddres: registerAddress,
                    userEmail: registerEmail,
                    userPassword: registerPassword};

        //  update details
        if(sessionStorage.getItem('loggedUser')){
            const url = '../php/update.php';
            let customerId = sessionStorage.getItem('loggedUser');


        console.log(data);

        fetch(url, {
            method: 'POST',
            body: 'customerId=' + customerId + '&'
            + 'data=' + JSON.stringify(data),
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
        }else {

            const url = '../php/register.php';

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

        }




                // //Create request object
                // let request = new XMLHttpRequest();

                // //Create event handler that specifies what should happen when server responds
                // request.onload = function(){
                //     //Check HTTP status code
                //     if(request.status === 200){
                //         //Get data from server
                //         let responseData = request.responseText;

                //         //Add data to page
                //         console.log(responseData);
                //     }
                //     else
                //         alert("Error communicating with server: " + request.status);
                // };

                // //Set up request with HTTP method and URL
                // request.open("POST", url);
                // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

                // //Send request
                // request.send('data=' + JSON.stringify(data));

    });

    loginButton.addEventListener('click', () => {

        let loginEmail = document.getElementById('email-login').value;
        let loginPassword = document.getElementById('password-login').value;
        let url = '../php/login.php';


                //Create request object
                let request = new XMLHttpRequest();

                //Create event handler that specifies what should happen when server responds
                request.onload = function(){
                    //Check HTTP status code
                    if(request.status === 200){
                        //Get data from server
                        let responseData = JSON.parse(request.responseText)[0];

                        //Save customer details to localStorage
                        if(responseData.userPassword === loginPassword
                            && !sessionStorage.getItem('loggedUser')){
                            console.log(responseData);
                            sessionStorage.setItem('loggedUser', JSON.stringify(responseData._id.$id));

                            location.reload();

                        }

                    }
                    else
                        alert("Error communicating with server: " + request.status);
                };

                //Set up request with HTTP method and URL
                request.open("POST", url);
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

                //Send request
                request.send('email=' + loginEmail);



        // fetch(url, {
        //     method: 'POST',
        //     body: 'email=' + loginEmail,
        //     headers: new Headers({
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //     })
        // })
        // .then((response) => {
        //     console.log(response);
        // })
        // .catch(error => console.error('Error:', error))
        // .then(response => console.log(response));

    })


    }
