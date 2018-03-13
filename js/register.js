window.onload = loginRegister;

function loginRegister() {

    var registerButton = document.getElementById('register-button');
    var loginButton = document.getElementById('login-button');


    registerButton.addEventListener('click', () => {

        var registerName = document.getElementById('name-register').value;
        var registerAddress = document.getElementById('address-register').value;
        var registerEmail = document.getElementById('email-register').value;
        var registerPassword = document.getElementById('password-register').value;
        var registerRepeatPassword = document.getElementById('password-repeat-register').value;

        var url = '../php/register.php';
        var data = {username: registerName,
                    userAddres: registerAddress,
                    userEmail: registerEmail,
                    userPassword: registerPassword};

        console.log(data);



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


        fetch(url, {
            method: 'POST',
            body: 'data=' + JSON.stringify(data),
            headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
        .then(res => console.log(res))
        .catch(error => console.error('Error:', error))



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

                        //Add data to page
                        console.log(responseData);
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