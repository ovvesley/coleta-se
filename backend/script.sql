/*CASO NÃO TENHA O DB CRIADO NA SUA MÁQUINA E QUEIRA FAZER ISSO PELO TERMINAL: 
*/
CREATE DATABASE coletase;
 
ALTER DATABASE coletase  CHARACTER SET utf8 COLLATE utf8_general_ci; -- Alterar o charset do BD para utf8

use coletase;*/  --Usar o BD para fazer os querys abaixo:


CREATE TABLE local(
    id_local INT UNSIGNED NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(30) NOT NULL,
    latitude DOUBLE NOT NULL,
    longitude DOUBLE NOT NULL,
    descricao VARCHAR(200) NOT NULL, 
    PRIMARY KEY (id_local)
);


--Inserção dos dados pra vocês testarem:

INSERT INTO local VALUES(NULL, 1234, 4567, "Testando 1", "TEST1"); 
INSERT INTO local VALUES(NULL, 888, 999, "ESTE TESTE HÁ DE FUNCIONAR, SE DEUS QUISER", "TESTE2");
INSERT INTO local VALUES(NULL, 000, 1010, "Dias, Maia, Wesley e Amaral são os brads e eu sou horrível", "TESTE 3");