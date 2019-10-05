<?php
  $host = 'localhost';
  $user = '44252'; //Insira usuario
  $pass = 'arcadeatenas2017'; //Insira senha
  $name = '44252';
  $connect = mysqli_connect($host, $user, $pass, $name);
    if(!$connect){
        die('Erro de conexão: ' . mysqli_connect_error());
    }
    else{
        $sql = "SELECT * FROM local";
        if(mysqli_query($connect, "SET CHARACTER SET 'utf8'")  && $result=mysqli_query($connect, $sql)){
            $data = [];
            $lt = [];
            $i = 0;
            while($row = mysqli_fetch_assoc($result)){
                $data[$i]= [
                    'coordinate' => array( 'latitude' =>$row['latitude'], 'longitude'=>$row['longitude']),
                    'description' => $row['descricao'],
                    'title' => $row['titulo'],
                    'id' => $row['id_local']
                ];
                $i++;
            }
            header("Access-Control-Allow-Origin:*");
            header("Content-type: application/json; charset='utf-8'");
            echo json_encode($data);
            mysqli_close($connect);
        }
        else{
            echo("Erro de consulta: ". mysqli_error($connect));
            die(mysqli_close($connect));
        }
    }


