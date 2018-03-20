<?php
//Connect to database
$mongoClient = new MongoClient();

//Select a database and collection
$db = $mongoClient->ecommerce->orders;

//producst array - this would be a JSON string sent to the server and extracted from $_POST

$productsData = filter_input(INPUT_POST, 'data', FILTER_SANITIZE_STRING);

//Extract ID from POST data

$custID = filter_input(INPUT_POST, 'customerId', FILTER_SANITIZE_EMAIL);


$products = str_replace("&#34;", "", $productsData);


//Build MongoId array

function buildArray($n)
{
    return (new MongoId($n));
}

$productsIdArray = array_map("buildArray", $products);




//Build PHP array
$orderDetails = [

    "customerId" => new MongoId($custID),
    "productsIdArray" => $products
];

//insert array to cart collection
$returnVal = $db->insert($orderDetails);

//Echo result back to user
if($returnVal['ok']==1){
    echo 'ok' ;
}
else {
    echo 'Error updating customer';
}

//Close the connection
$mongoClient->close();