<?php
  $host = 'localhost';
  $user = 'enzo-z'; //Insira usuario
  $pass = 'computacao10Z-'; //Insira senha
  $name = 'coletase';
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
                    'lt' => array( 'latitude' =>$row['latitude'], 'longitude'=>$row['longitude']),
                    'descricao' => $row['descricao'],
                    'titulo' => $row['titulo'],
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

  

