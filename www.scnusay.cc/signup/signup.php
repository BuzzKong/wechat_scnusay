<?php
header("Content-Type: text/html; charset=utf8");
$server = "localhost";//����
$db_username = "root";//������ݿ��û���
$db_password = "23314567913aq";//������ݿ�����

$con = new mysqli($server, $db_username, $db_password);//�������ݿ�

// �������
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}
//echo "���ӳɹ�";



mysqli_select_db($con, 'user' );
$username=$_POST['username'];//post��ȡ�����name
$password=md5($_POST['password']);//post��ȡ�����password
$userphone=$_POST['userphone'];//post��ȡ�����phone
$scnu_number=$_POST['scnu_number'] ;//post��ȡ�����role

$q="insert into scnusay(id,user_id,userpassword,userphone,scnu_number) values (null,'$username','$password','$userphone','$scnu_number')";//�����ݿ�����������ֵ��sql
$reslut=$con->query($q);//ִ��sql
$success="ע��ɹ�!";


if ($reslut){
    echo iconv("GB2312","UTF-8","$success");
}else {
	echo iconv("GB2312","UTF-8","ע��ʧ��,��˶��ֻ������Լ�ѧ��!");
}
$con->close()//�ر����ݿ�
?>
