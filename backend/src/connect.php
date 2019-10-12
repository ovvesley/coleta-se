<?php
    $host = 'localhost';
    $user = '44252'; //Insira usuario
    $pass = 'arcadeatenas2017'; //Insira senha
    $name = '44252';//Insira nome bd
    $connect = mysqli_connect($host, $user, $pass, $name);
    if(!$connect){
        require("geraERROS.php");
        cospeERROSemJSON(1000);
        die(); 
    }