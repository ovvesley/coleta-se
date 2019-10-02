<?php
    abstract class ConnectionClass {
        protected function conecta(){
            $dsn = "mysql:hostname = localhost; dnbame = coletase; charset = utf8"; //Mude o host
            $user = 'enzo-z'; 
            $pass = 'computacao10Z-';            
            try{
                $connectionPDO = new PDO($dsn, $user, $pass);
                return $connectionPDO;    
            }catch(PDOException $erro){
                echo $erro->getMessage(); //Alterar para return dps
            }

        }
    }