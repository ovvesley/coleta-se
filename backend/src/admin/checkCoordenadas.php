<?php
function checkCoordAlreadyExist($inputeData){
    require("connect.php");
    $sql = "SELECT latitude, longitude FROM local";
    $response = mysqli_query($connect, $sql);
    $exist = true;
    if($response){
        echo '<table>';
        echo '<tr>';
        echo '<th>Latitude do MYSQL</th>';
        echo '<th>Longitude do MYSQL</th>';
        echo '<th>Latitude INPUT</th>';
        echo '<th>Longitude INPUT</th>';
        echo '<th>CONDICIONAL</th>';
        echo '</tr>';
        echo '<tr>';
        while($row = mysqli_fetch_array($response)){
            echo '<tr>';
            echo "<td>".$row['latitude']."</td>";
            echo "<td>".$row['longitude']."</td>";
            echo "<td>".$inputeData['latitude']."</td>";
            echo "<td>".$inputeData['longitude']."</td>";
            echo '<td>'.(($row['latitude'] == $inputeData['latitude']) && ($row['longitude'] == $inputeData['longitude'])).'</td>';
            echo '</tr>';
            
            if (($row['latitude'] === $inputeData['latitude']) && ($row['longitude'] === $inputeData['longitude'])){
                $exist = 1002;
            }
            elseif($exist != 1002){
                    $exist = false;
            }
        }
        echo '</tr>';
        echo "</table>";
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