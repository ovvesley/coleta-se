<?php   
    cospeJSON();
    function cospeJSON(){
        include("connect.php");
        $stmt = mysqli_stmt_init($connect);
        $queryCommand = 'SELECT * FROM local';
        if(mysqli_stmt_prepare($stmt, $queryCommand) && mysqli_query($connect, "SET CHARACTER SET 'utf8'") ){
            mysqli_execute($stmt);
            $result= mysqli_stmt_get_result($stmt);
            $data = [];
            $i = 0;
            while($row = mysqli_fetch_assoc($result)){
                $data[$i]= [
                    'coordinate' => array( 'latitude' => $row['latitude'], 'longitude'=>$row['longitude']),
                    'description' => $row['descricao'],
                    'title' => $row['titulo'],
                    'id' => $row['id_local']
                ];
                $i++; 
            }
            mysqli_stmt_close($stmt);   
            header("Access-Control-Allow-Origin:*");
            header("Content-type: application/json; charset='utf-8'");
            echo json_encode($data);
        }
        else{
            if(!mysqli_stmt_prepare($stmt, $queryCommand)){
                echo 'Failed to prepare statement!'. mysqli_error($connect);
            }
            else{
                echo ' Failed charset!';
            }
        }
        mysqli_close($connect);

    }