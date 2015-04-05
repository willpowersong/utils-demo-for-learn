<?php 

header('Content-type: text/html; charset=utf-8');
define('MAX_SIZE',200000);

if($_FILES['file']['error']==0){

	if($_FILES['file']['type'] != 'image/jpeg' && $_FILES['file']['type'] != 'image/pjpeg'){
		echo "<script>alert('图片格式不正确！请重新上传！');history.back();</script>";
	}else{
		if($_FILES['file']['size'] > MAX_SIZE){
			echo "<script>alert('文件大小超出范围！');history.back();</script>";
		}
	}

	if(move_uploaded_file($_FILES['file']['tmp_name'], "C:/".date("d-m-y",time()).$_FILES['file']['name'])){
		echo '文件上传成功';
	}else{
		echo "文件上传失败";
	}
}

?>