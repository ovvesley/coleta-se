<?php
  $host = 'localhost';
  $user = 'root';
  $pass = '';
  $name = 'coletase';
  $connect = mysqli_connect($host, $user, $pass, $name);
    if(!$connect){
        die('Erro de conexão: ' . mysqli_connect_error());
    }

    $sql = "SELECT * FROM local";
    
    if($result=mysqli_query($connect, $sql)){
        $data = [];
        $i = 0;
        while($row = mysqli_fetch_assoc($result)){
            $data[$i]= [
                'id' => $row['id_local'],
                'latitude' => $row['latitude'],
                'longitude' => $row['longitude'],
                'titulo' => $row['titulo'],
                'descricao' => $row['descricao']
            
            ];
            $i++;
        }
        
        echo json_encode($data);
        
    }




  

