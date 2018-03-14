<?php
//Connect to database
$mongoClient = new MongoClient();

//Select a database
$db = $mongoClient->ecommerce;

//Select a collection
$collection = $db->customers;

//Test data - this would be a JSON string sent to the server and extracted from $_POST
$testCustomerData = $_POST['data'];

//Extract ID from POST data
$custID = $_POST['customerId'];

//Build PHP array with remove criteria
$findCriteria = [
    "_id" => new MongoId($custID)
];

// Convert JSON string to PHP  array. 'true' converts to array instead of PHP object.
$customerDataArray = json_decode($testCustomerData, true);

//Specify how the documents will be updated
$updateCriteria = [
    '$set' => $customerDataArray
];

//Update all of the customers that match  this criteria
$returnVal = $db->customers->update($findCriteria, $updateCriteria);

//Echo result back to user
if($returnVal['ok']==1){
    echo 'ok' ;
}
else {
    echo 'Error updating customer';
}


// //Add the customer to the database
// $returnVal = $collection->insert($customerDataArray);

// //Echo result back to user
// if($returnVal['ok']==1){
//     echo 'ok' ;
// }
// else {
//     echo 'Error adding product';
// }

//Close the connection
$mongoClient->close();