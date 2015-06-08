<!DOCTYPE HTML>
<html lang='en'>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
	<title>模拟登录</title>
</head>
<body>
<?php  
// http://coin.lib.scuec.edu.cn/reader/redr_verify.php
// 模拟登录学校图书馆并获得借书记录

$url = 'http://coin.lib.scuec.edu.cn/reader/redr_verify.php';
$name = '';
$pass = '';
$fields_post = array(
    'number' => $name,
    'passwd' => $pass,
    'select' => 'cert_no'
);
$fields = http_build_query($fields_post, '&');
$cookie_file = dirname(__FILE__)."/cookie.txt";

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 1);
curl_setopt($data, CURLOPT_ENCODING, '');
curl_setopt($data, CURLOPT_HEADER, 0);//显示返回的Header区域内容
curl_setopt($data, CURLOPT_RETURNTRANSFER,1);
curl_setopt($data, CURLOPT_FOLLOWLOCATION, 1); // 使用自动跳转
curl_setopt($data, CURLOPT_TIMEOUT, 60);

//post
curl_setopt($curl, CURLOPT_POST, 1);
curl_setopt($curl, CURLOPT_POSTFIELDS, $fields);
curl_setopt($curl, CURLOPT_COOKIEJAR, $cookie_file);
curl_setopt($curl, CURLOPT_COOKIEFILE, $cookie_file);
curl_setopt($curl, CURLOPT_RETURNTRANSFER,1);

	// 执行操作
	$result = curl_exec($curl);

if($result == NULL) {
	echo "Error:";
	echo curl_errno($curl)."-". curl_error($curl) . "";
}else{
	echo "您借的书有"."<br>";
}
	// 关闭CURL会话
	curl_close($curl);

// 建一个新的curl查询书目
$url ='http://coin.lib.scuec.edu.cn/reader/book_lst.php';
// $url ='http://localhost:8080/test.php';
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($data, CURLOPT_ENCODING, '');
curl_setopt($data, CURLOPT_HEADER, 0);//显示返回的Header区域内容
curl_setopt($data, CURLOPT_RETURNTRANSFER,1);
curl_setopt($data, CURLOPT_FOLLOWLOCATION, 1); // 使用自动跳转
curl_setopt($data, CURLOPT_TIMEOUT, 60);

$cookie = dirname(__FILE__)."/cookie.txt";
curl_setopt($curl, CURLOPT_COOKIEFILE, $cookie);
	$ch=curl_exec($data);
	curl_setopt($curl,CURLOPT_RETURNTRANSFER,1);
	//关闭url请求
	$data=curl_exec($curl);

	$preg = "/(?:<td[^>]*)>(?:<a[^>]*)>([^<]*)/";
	preg_match_all($preg, $data, $arr); 
	$len=count($arr[1]);
	for ($i=0; $i < $len; $i++) { 
		echo $arr[1][$i]."<br>";
	}
@ unlink($cookie); 
curl_close($curl);
?>
</body>
</html>