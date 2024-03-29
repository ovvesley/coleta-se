<?php
    function insertPontoInDB($inputeData){
        require("connect.php");
        $sql = "INSERT INTO userinserts (id_inserted, titulo, latitude, longitude, descricao) VALUES (NULL, ?, ?, ?, ?)";
        //S, D, D, S
        if ($stmt = mysqli_prepare($connect, $sql)){
            // Bind param
            mysqli_stmt_bind_param($stmt, "sdds", $inputeData['titulo'], $inputeData['latitude'], $inputeData['longitude'], $inputeData['descricao']);
            
            mysqli_stmt_execute($stmt);

            $affectedRows = mysqli_stmt_affected_rows($stmt);

            if($affectedRows!=1){
                require("geraERROS.php");
                cospeERROSemJSON(1003);
            }
            mysqli_stmt_close($stmt);
            mysqli_close($connect);
        } 
    }