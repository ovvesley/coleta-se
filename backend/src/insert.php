<?php
    function insereDados(){
        $host = 'localhost';
        $user = 'root'; //Insira usuario
        $pass = ''; //Insira senha
        $name = '';//Insira nome bd
        $connect = mysqli_connect($host, $user, $pass, $name);
        if(!$connect){
            die('Erro de conexão: ' . mysqli_connect_error());
        }
        else{
            $f = fopen("qqq.csv", r);
            $arq = fgetcsv($f);  // 0, 1, 2, 3, 4
            mysqli_query($connect, "SET CHARACTER SET 'utf8'");
            $arq = fgetcsv($f);
            while ($arq){
 //                                                                                                                        id, tituloSTRING, lat, long, desSTRING
                mysqli_query($connect, "INSERT INTO local (id_local, titulo, latitude, longitude, descricao) VALUES (" . "$arq[0]," . "'$arq[1]',". "$arq[2],". "$arq[3],"."'$arq[3]');");
                if(mysqli_affected_rows($connect) != 1){
                    die ('something went wrong on the insertion of:'.$arq[1]);
                }
                $arq = fgetcsv($f);
            }
            mysqli_close($connect);
        }
    }