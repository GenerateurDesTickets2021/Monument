<?php
header("Access-Control-Allow-Origin: *"); 
$con = mysqli_connect("localhost", "root", "", "ionic") or die("could not connect DB"); 
$data=array(); 
$q=mysqli_query($con, "SELECT * FROM `monument` "); 

while ($row=mysqli_fetch_object($q)){
    $data[]=$row; 
}
echo json_encode($data); 
echo mysqli_error($con); 
?>