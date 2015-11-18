<?php
$servername = "VigiDB";
$username = "root";
$password = "NOPEnope";
$vigidb = "vigidb";

$conn = mysqli_connect($servername, $username, $password, $vigidb);

if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());


echo "Connection successful";
}
?>
