<?php
        function checkData($inputeData){
            $dataMissing = array();
            foreach ($inputeData as $key => $value) {
                trim($value);
                if(empty($value)){
                    $dataMissing[$key] = "$key";
                }
            }
            if(!empty($dataMissing)){
                include("index2.php");
                echo 'Você deixou de entrar com os seguintes dados: <br/>';
                foreach($dataMissing as $missing){
                     echo "$missing<br/>";
                }
                $error = 1001;
                return $error;
            }
            else{
                return false;
            }
        }