<?php
include "constants.php";

$db_connection = new mysqli("localhost", DB_USERNAME, DB_PASSWORD, "webdevcourse");

$db_connection->query(
  "INSERT INTO `reservations` (`name`, `date`) VALUES ('Chalmers', '2021-04-20');"
);
