<?php

//Connect to MongoDB
$mongoClient = new MongoClient();

//Select a database
$db = $mongoClient->ecommerce;

//Extract ID from POST data
$custID = $_POST['id'];

//Build PHP array with remove criteria
$remCriteria = [
    "_id" => new MongoId($custID)
];

//Delete the customer document
$returnVal = $db->products->remove($remCriteria);

//Echo result back to user
if($returnVal['ok']==1){
    echo 'Ok ' . $returnVal['n'] . ' documents deleted.';
}
else{
   echo 'Error deleting product';
}

//Close the connection
$mongoClient->close();