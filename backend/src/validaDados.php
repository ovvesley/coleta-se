<?php   
    $method = $_SERVER['REQUEST_METHOD'];
    if($method == 'POST'){
        $inputeData = [
            'titulo' => $_POST['titulo'],
            'latitude' => $_POST['latitude'],
            'longitude' => $_POST['longitude'],
            'descricao' => $_POST['descricao']
        ];
        require("checkDados.php");
        require("checkCoordenadas.php");
        validando($inputeData);
    }

    function validando($inputeData){
        $result = checkData($inputeData);
        if($result == 1001){

            require("geraERROS.php");
            cospeERROSemJSON($result);
        }
        if(!$result){
            $result2 = checkCoordAlreadyExist($inputeData);
            if($result2 == 1002){
                require("geraERROS.php");
                cospeERROSemJSON($result2);
            }
            if(!$result2){
                require("insertPonto.php");
                insertPontoInDB($inputeData);
            }
        }
    }