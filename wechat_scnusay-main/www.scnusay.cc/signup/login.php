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
$q="select * from `tb_user` where `username` = '$name' and `password` = '$password'";//�����ݿ��ѯ��������ֵ��sql
$con->query('SET NAMES UTF8');
$result = $con->query($q);// ִ�� sql

// ��ȡִ�� sql ��ķ��ض���
$obj=$result->fetch_assoc();

if (mysqli_num_rows($result) > 0){

    // ����Ա
    if($obj["role"] == '1'){
        echo"����Ա��¼�ɹ�";
    }else{
        echo"��ͨ�û���¼�ɹ�";
    }

}else{
    echo "�û������������";
}
$con->close();//�ر����ݿ�

?>

