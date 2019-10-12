<?php
        function checkData($inputeData){
            $dataMissing = array();
            foreach ($inputeData as $key => $value) {
                trim($value);
                if(empty($value)){
                    $dataMissing[$key] = "$key"; /* Caso seja necessário, poderemos mostrar quais campos o usuário nao entrou:
//                                                 ex: Você não entrou com: titulo, latitude!*/
                }
            }
            if(!empty($dataMissing)){ 
                $error = 1001;
                return $error;   //Se tiver dados faltando, retornará o erro para ser jogado no JSON
            }
            else{
                return false; // Caso não tenha dados faltando, retorna false!
            }
        }