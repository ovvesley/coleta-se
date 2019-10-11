<?php
        function checkData($inputeData) : bool{
            $dataMissing = array();
            echo "checkData<br>";
            foreach ($inputeData as $key => $value) {
                trim($value);
                if(empty($value)){
                    $dataMissing[$key] = "$key";
                }
            }
            
            if(!empty($dataMissing)){ //Depois, modificar isso com uma regular expression, no futuro [VER AMANHÃ]
                include("index2.php");
                echo 'You need to enter the following data: <br/>';
                foreach($dataMissing as $missing){
                     echo "$missing<br/>";
                }
                return true;
            }
            else{
                return false;
            }
        }