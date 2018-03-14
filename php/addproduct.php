<?php
//Connect to database
$mongoClient = new MongoClient();

//Select a database
$db = $mongoClient->ecommerce;

//Select a collection
$collection = $db->products;

//Test data - this would be a JSON string sent to the server and extracted from $_POST
$testCustomerData = $_POST['data'];

//Convert JSON string to PHP  array. 'true' converts to array instead of PHP object.
$customerDataArray = json_decode($testCustomerData, true);

//Add the customer to the database
$returnVal = $collection->insert($customerDataArray);

//Echo result back to user
if($returnVal['ok']==1){
    echo 'ok' ;
}
else {
    echo 'Error adding product';
}

//Close the connection
$mongoClient->close();