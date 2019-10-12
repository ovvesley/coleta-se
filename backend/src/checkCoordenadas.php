<?php
function checkCoordAlreadyExist($inputeData){
    require_once("connect.php");
    $sql = "SELECT latitude, longitude FROM userinserts";
    $response = mysqli_query($connect, $sql);
    $exist = false;
    if($response){
        while($row = mysqli_fetch_array($response)){
            if (($row['latitude'] == $inputeData['latitude']) && ($row['longitude'] == $inputeData['longitude'])){
                $exist = 1002;
                break;
            }
        }
    }
    else{
        require("geraERROS.php");
        cospeERROSemJSON(1002.5);
        mysqli_close($connect);
        die();
    }
    return $exist;
}