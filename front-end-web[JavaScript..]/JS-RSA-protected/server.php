<?php  

	$word='qwertyuiopasdfghjklxczvnmb1234567890';
	$key='';

	if(isset($_POST['task']) && $_POST['task']=='key'){

		// 随机生成5-8的key值
		$len=rand(5,8);
		for($i=0; $i<$len; $i++){
			$key=$key.$word[rand(0,35)];
		}

	$user = $_POST['user'];

	// 连接数据库存储这个值
	$con = mysql_connect('localhost','root','root');
	mysql_select_db('user',$con);

	$sql = sprintf('UPDATE `user` set key=\'"%s"\' where name=\'"%s"\';',$user,$key);
	mysql_query($sql);

	}
	echo $key;
?>