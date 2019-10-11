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
        if(!checkData($inputeData) && !checkCoordAlreadyExist($inputeData)){
            require("insertPonto.php");
            insertPontoInDB($inputeData);
        }
        
    }