<?php
//Connect to MongoDB
$mongoClient = new MongoClient();

//Select a database
$db = $mongoClient->ecommerce;

//Extract the data that was sent to the server
$email= filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);

//Create a PHP array with our search criteria
$findCriteria = [
    "userEmail" => $email,
 ];

//Find all of the customers that match  this criteria
$cursor = $db->customers->find($findCriteria);

//Output each product as a JSON object with comma in between
$numResults = $cursor->count();//Number of products in database
$cntr = 0;//Enables us to add a comma after every product but the last

//Start array
echo '['; //Start of array of customers in JSON

//Work through the customers
foreach ($cursor as $customer){
    echo json_encode($customer);//Convert PHP representation of product into JSON
    $cntr++;

    //Add comma after every customer but the last
    if($cntr != $numResults){
        echo ',';//Separator between products
    }
}

//Close array
echo ']';

//Close the connection
$mongoClient->close();