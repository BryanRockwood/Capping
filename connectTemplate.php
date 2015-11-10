<?php
function getDB(){
$(our database) = new mySqli("host=127.0.0.1", "root", "(password)", "(database)")
# if theres a failure
or die ("connection Error");

	return $(our database);
}
	?>
