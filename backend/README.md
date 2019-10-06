# Backend PHP [Com adição do MySQL]
    Neste repositório irá ser tratado a conexão do coleta-se com o Banco de Dados em Mysql.
    Estarei utilizando PHP PDO, para facilitar futuras mudanças do BD, bem como uma proteção maior e um suporte maior a POO. 


Este repositório estará sob supervisão minha (Enzo Zamora [enzo-z]), um péssimo programador overall.



## Momento de Prototipação (Ideia inicial)

Bom, a ideia aqui será fazer a conexão com o BD, e cuspir os dados do BD num JSON para ser tratado no frontend. Nisso, a API do Maps vai utilizar os dados para mostrar os pontos de coleta no mapa.
O JSON deverá emitir um array de objetos, no formato
    
        objASerRetornado = [ 
        {"lat":1234, "long": "4123", "descricao": "aaaaa", "titulo":"bbbbb", "id": 01}, 

        {"lat":1234, "long": "4123", "descricao": "aaaaa", "titulo":"bbbbb", "id": 02},  

        {"lat":1234, "long": "4123", "descricao": "aaaaa", "titulo":"bbbbb", "id": 03},  

        {"lat":1234, "long": "4123", "descricao": "aaaaa", "titulo":"bbbbb", "id": 04},  

        {"lat":1234, "long": "4123", "descricao": "aaaaa", "titulo":"bbbbb", "id": 05}
        ]

Logo, a tabela precisará de
    id : Chave primária (auto increment)
    lat: latitude
    long: longitude
    descricao : descricao sobre o que é aquele ponto de coleta, os lixos que ele armazena e zás
    titulo: nome do ponto


LET'S get this going! Boa sorte, Enzo do brevíssimo futuro. 

## Sobre os arquivos:

### Script.sql

Neste arquivo há toda a arquitetura do banco de dados em sql, bem como alguns exemplos de inserções manuais para se testar. 

### src/insert.php 

Possui a função de ler os dados provenientes de um CSV (qqq.csv) e faz as querys de inserção. 

### src/index.php

Emite o JSON com um array de objetos contendo os dados necessários do aplicativo, para ser pego pelo frontend.
