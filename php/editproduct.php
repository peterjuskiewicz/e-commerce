<?php
//Connect to MongoDB
$mongoClient = new MongoClient();

//Select a database
$db = $mongoClient->ecommerce->products;

$cursor = $db->find();

$numResults = $cursor->count();
$cntr = 0;


echo '['; //Start of array of customers in JSON

foreach ( $cursor as $customer)
{
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


