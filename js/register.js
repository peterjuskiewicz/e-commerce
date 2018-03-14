window.onload = loginRegister;

function loginRegister() {

    var registerButton = document.getElementById('register-button');
    var loginButton = document.getElementById('login-button');

    var registerText1 = document.getElementById('register-text-1');
    var registerText2 = document.getElementById('register-text-2');

    var loginField = document.getElementById('login-field');


//  Change text depending if user is registered

    if(sessionStorage.getItem('loggedUser')) {
        registerText1.innerHTML = 'update details';
        registerText2.innerHTML = 'Want to update details?';
        registerButton.innerHTML = 'update';
        loginField.setAttribute('visibility', 'hidden');


    }else {
        registerText1.innerHTML = 'register';
        registerText2.innerHTML = 'Not registered yet? Please register';
        registerButton.innerHTML = 'register';
        loginField.removeAttribute('visibility');
    }


    registerButton.addEventListener('click', () => {

        var registerName = document.getElementById('name-register').value;
        var registerAddress = document.getElementById('address-register').value;
        var registerEmail = document.getElementById('email-register').value;
        var registerPassword = document.getElementById('password-register').value;
        var registerRepeatPassword = document.getElementById('password-repeat-register').value;
        var data = {username: registerName,
                    userAddres: registerAddress,
                    userEmail: registerEmail,
                    userPassword: registerPassword};

        //  update details
        if(sessionStorage.getItem('loggedUser')){
            const url = '../php/update.php';
            let customerId = sessionStorage.getItem('customerId');


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
                // var request = new XMLHttpRequest();

                // //Create event handler that specifies what should happen when server responds
                // request.onload = function(){
                //     //Check HTTP status code
                //     if(request.status === 200){
                //         //Get data from server
                //         var responseData = request.responseText;

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

        var loginEmail = document.getElementById('email-login').value;
        var loginPassword = document.getElementById('password-login').value;
        var url = '../php/login.php';


                //Create request object
                var request = new XMLHttpRequest();

                //Create event handler that specifies what should happen when server responds
                request.onload = function(){
                    //Check HTTP status code
                    if(request.status === 200){
                        //Get data from server
                        var responseData = JSON.parse(request.responseText)[0];

                        //Save customer details to localStorage
                        if(responseData.userPassword === loginPassword
                            && !sessionStorage.getItem('loggedUser')){
                            console.log(responseData);
                            sessionStorage.setItem('loggedUser', JSON.stringify(responseData));

                            // save customerId to localStorage
                            var customerId = JSON.parse(sessionStorage.getItem('loggedUser'))._id.$id;
                            sessionStorage.setItem('customerId', customerId);
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
