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
$cursor = $db->products->find($findCriteria);

//Output the results

foreach ($cursor as $cust){
   echo '<div class="pro-item col-md-3 col-sm-3 "> <img src="' . $cust['productImagePath'] .
   '" alt="" class="img-responsive" >';
   echo '<p class="font-15">' . $cust['productName'] . '</p>';
   echo    '<p class="font-15 orange font-bold"><del class="light-grey lighter">' .
   $cust['productPrice'] * 2 . '</del>' . $cust['productPrice'] . '</p>';
   echo '<div class="clearfix"> <a class="cart" href="#">add to cart</a> </div>';;
   echo "</div>";
}

//Close the connection
$mongoClient->close();
