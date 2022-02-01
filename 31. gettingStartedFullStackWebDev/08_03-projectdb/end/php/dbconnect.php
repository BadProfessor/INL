<?php

include "constants.php";

$db_connection = new mysqli("localhost", DB_USERNAME, DB_PASSWORD, "webdevcourse");

$nameres = $_POST['nameres'];
$day = new DateTime($_POST['startres']);
$endres = new DateTime($_POST['endres']);

while ($day < $endres){
  $dateToInsert = $day->format('Y-m-d');
  $db_connection->query(
    "INSERT INTO `reservations` (`name`, `date`) VALUES ('$nameres', '$dateToInsert');"
  );
  $day->add(new DateInterval('P1D'));
}