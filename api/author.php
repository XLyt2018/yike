<?php
//处理请求,返回数据
//模拟数据,进行返回
// echo "从php返回的数据";
//向一刻的服务器发送请求,获取请求数据
//获取参数
$url_1 = 'https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';
$url_2 = 'https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';



//返回数据

 $data1=file_get_contents($url_1);
 $data1=json_decode($data1);
 $data2=file_get_contents($url_2);

 $data2=json_decode($data2);
 $data=Array($data1,$data2);
  echo json_encode($data);
  // echo $data; 


/* $data1=file_get_contents($url_1);
$data1=json_decode($data1);//接受一个 JSON 格式的字符串并且把它转换为 PHP 变量 
$data2=file_get_contents($url_2);

$data2=json_decode($data2);
$arr=Array($data1,$data2);
echo json_encode($arr); */
?>