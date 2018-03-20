<?php
//Connect to MongoDB
$mongoClient = new MongoClient();

//Select a database
$db = $mongoClient->ecommerce;

//Extract the data that was sent to the server
$productID = $_POST['id'];

//Create a PHP array with our search criteria
$findCriteria = [
    "_id" => new MongoId($productID)
 ];

//Find all of the customers that match  this criteria
$cursor = $db->products->find($findCriteria);

//Output each product as a JSON object with comma in between
$numResults = $cursor->count();//Number of products in database
$cntr = 0;//Enables us to add a comma after every product but the last

//Start array
echo '['; //Start of array of customers in JSON

//Work through the customers
foreach ($cursor as $product){
    echo json_encode($product);//Convert PHP representation of product into JSON
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