<?php
function checkCoordAlreadyExist($inputeData){
    require("connect.php");
    $sql = "SELECT latitude, longitude FROM local";
    $response = mysqli_query($connect, $sql);
    $exist = false;
    if($response){
        while($row = mysqli_fetch_array($response)){
            if (($row['latitude'] === $inputeData['latitude']) && ($row['longitude'] === $inputeData['longitude'])){
                $exist = 1002;
                break;
            }
        }
    }
    else{
        echo "Ocorreu um erro na hora de saber se o local já está registrado! <br />";
        echo mysqli_error($connect);
        mysqli_close($connect);
    }
    if ($exist==1002){
        include_once("index2.php");
        echo '<h1>SEU LOCAL JÁ EXISTE!</h1>';
        mysqli_close($connect);
    }
    return $exist;
}