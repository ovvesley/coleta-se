/*CASO NÃO TENHA O DB CRIADO NA SUA MÁQUINA E QUEIRA FAZER ISSO PELO TERMINAL: 
*/
CREATE DATABASE coletase;
 
ALTER DATABASE coletase  CHARACTER SET utf8 COLLATE utf8_general_ci; -- Alterar o charset do BD para utf8

use coletase;*/  --Usar o BD para fazer os querys abaixo:


CREATE TABLE local(
    id_local INT UNSIGNED NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(50) NOT NULL,
    latitude DOUBLE NOT NULL,
    longitude DOUBLE NOT NULL,
    descricao VARCHAR(200) NOT NULL, 
    PRIMARY KEY (id_local)
);

--Inserções dos dados que o Maia passou [DO JEITO MACACO]
/*

INSERT INTO local VALUES(NULL,"[Ecoponto] Light Recicla - Botafogo",-22.955657,-43.179367,"8:00 às 16:30h (2ª 4ª 6ª feira). 09:00 às 17:30h (3ª e 5ª feira). Sábados de 9:00 às 12:30");

INSERT INTO local VALUES(NULL,"[Ecoponto] Light Recicla - Leme",-22.955657,-43.179367,"Coletas: Somente às quintas-feiras de 08hs às 16:30h (almoço 11:00 às 12:00h)");

INSERT INTO local VALUES(NULL,"[Ecoponto] Light Recicla - Leblon",-22.981483,-43.214912,"Coletas: 2ª e 4ª feiras de 08hs às 16:30h (almoço 11:00 às 12:00h). Sábados de 9:00 às 12:30");

INSERT INTO local VALUES(NULL,"[Ecoponto] Light Recicla - Humaitá",-22.953999,-43.196912,"Coletas: 2ª, 4ª e 6ª feiras de 8:00 às 16:30h. 3ª e 5ª feiras de 09:00 às 17:30h. Sábados de 9:00 às 12:30");

INSERT INTO local VALUES(NULL,"[Ecoponto] Light Recicla - Estácio",-22.913793,-43.204490,"Coletas: Somente às segundas-feiras de 8hs às 16:30h (almoço 11:00 às 12:00h)");

INSERT INTO local VALUES(NULL,"[Ecoponto] Light Recicla - Copacabana",-22.962910,-43.193193,"Coleta: Somente às 6ª feiras a cada duas semanas de 7:00 às 16:00h(almoço 11:00 às 12:00h)");

INSERT INTO local VALUES(NULL,"[Ecoponto] Light Recicla - São Cristóvao/Zoológico",-22.904294,-43.229881,"Aberto aos finais de semana e feriados das 10h às 17h (fechamento da bilheteria às 16h)");

*/
--Inserções dos dados que o Amaral passou[DO JEITO MACACO]

/*

INSERT INTO local VALUES(NULL,"Centro de Reciclagem",-22.912009,-43.213126,"Jcs Reciclagem & Sucatas Ltda");

INSERT INTO local VALUES(NULL,"Ferro Velho",-22.916244,-43.209625,"Nilton Reciclagem");

INSERT INTO local VALUES(NULL,"Ferro Velho",-22.924016,-43.204793,"Ferro Velho 24 de Maio");

INSERT INTO local VALUES(NULL,"Ferro Velho",-22.886167,-43.251796,"Sucatas e Reciclagem HE");

INSERT INTO local VALUES(NULL,"Centro de Reciclagem",-22.857601,-43.249815,"A.C.E. Reciclagem Nossa Senhora de Lourdes de Bonsucesso Ltda");

*/

--Inserções dos dados que o Maia verificou do Amaral [JEITO MACACO]

/*

INSERT INTO local VALUES(NULL,"Ferro Velho",-22.872639,-43.105248,"PIDM Nova Reciclagem");

INSERT INTO local VALUES(NULL,"Centro de Reciclagem",-22.901342,-43.191086,"Reciclagem Tak Tak");


*/