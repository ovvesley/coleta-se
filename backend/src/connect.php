<?php
    $host = 'localhost';
    $user = 'enzo-z'; //Insira usuario
    $pass = 'computacao10Z-'; //Insira senha
    $name = 'coletase';//Insira nome bd
    $connect = mysqli_connect($host, $user, $pass, $name);
    if(!$connect){
        require("geraERROS.php");
        cospeERROSemJSON(1000);
        die(); 
    }