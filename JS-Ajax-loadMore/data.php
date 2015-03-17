<?php

		// $file = 'log.txt';
		// file_put_contents($file, $_GET["length"]);

		// $start= 3;
		$start = $_GET['length'];
		$con = mysql_connect("localhost","root","root");
		mysql_select_db("demo", $con);
		$sql = 'SELECT `wall_text` FROM wall LIMIT '.($start+1).',3';

		$result = mysql_query($sql);
		$count=1;
		while($row = mysql_fetch_array($result))
		{
			$array[$count]=$row['wall_text'];
  			$count++;
  		}
  		echo json_encode($array);

		mysql_close($con);
 ?>