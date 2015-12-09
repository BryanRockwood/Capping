<?php
$host = "host=localhost";
$port = "port=5432";
$dbname = "dbname=CappingDB";
$credentials = "user=postgres password=CMPT475L";

$conn = pg_connect( "$host $port $dbname $credentials" );
// $status = pg_connection_status($conn);
if (!$conn){
	echo "Connection failed";
}	else
{
	echo "Connection success ";
}
?>
