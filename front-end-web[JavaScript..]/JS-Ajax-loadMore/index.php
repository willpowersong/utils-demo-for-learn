<!doctype html>
<html>
<head>
	<title>Ajax分页+加载更多</title>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<link rel="stylesheet" type="text/css" href="css.css">
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="ajax.js"></script>
</head>
<body>
	<div id="lyric">
	<?php 
		$con = mysql_connect("localhost","root","root");
		mysql_select_db("demo", $con);
		$sql = "SELECT `wall_text` FROM wall LIMIT 0,3";
		$result = mysql_query($sql);
		while($row = mysql_fetch_array($result))
		{
			echo "<div class='item'>".$row['wall_text']."</div>";
  		}

		mysql_close($con);
	 ?>
	 </div>
	 <div id="but">加载更多</div>

</body>
</html>