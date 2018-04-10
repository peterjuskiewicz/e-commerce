<?php
//Connect to MongoDB
$mongoClient = new MongoClient();

//Select a database
$db = $mongoClient->ecommerce;

//Extract the data that was sent to the server
$search_string = $_POST['name'];

//Create a PHP array with our search criteria
// $findCriteria = [
//     '$text' => [ '$search' => $search_string ]
//  ];

$findCriteria = [
    "productName" => $search_string,
 ];

//Find all of the customers that match  this criteria
$result = $db->products->findOne($findCriteria);

//Output the results

   echo '<div class=""> <img src="' . $result['productImagePath'] .
   '" alt="" class="img-responsive" >';
   echo '<br>';
   echo '<p class="font-15">' . $result['productName'] . '</p>';
   echo '<img src="assets/images/star-rating.png" alt="" class="img-responsive mar-bot-7">';
   echo    '<p class="font-15 orange font-bold"><del class="light-grey lighter">' .
   $result['productPrice'] * 2 . '</del>' . $result['productPrice'] . '</p>';
   echo '<div class="clearfix">; <button class="cart" onclick="addToBasket(';
   echo  "'" . trim($result['_id']) . "'";
   echo ')">Add to basket</button> </div>';
   echo "</div>";




//Close the connection
$mongoClient->close();
