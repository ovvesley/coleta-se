# Backend PHP [Com adição do MySQL]

Neste repositório irá ser tratado a conexão do coleta-se com o Banco de Dados em Mysql.
Este repositório estará sob supervisão minha (Enzo Zamora [[enzo-z](https://github.com/enzo-z)]), um eterno aprendiz da programação.

## Momento de Prototipação (Ideia inicial)

Bom, a ideia aqui será fazer a conexão com o BD, e cuspir os dados do BD num JSON para ser tratado no frontend. Nisso, a API do Maps vai utilizar os dados para mostrar os pontos de coleta no mapa.
O JSON deverá emitir um array de objetos, no formato

    objASerRetornado = [ 
        
        {
          coordinate: { latitude: -22.905, longitude: -43.2096 },
          description: "Lixeira de Teste",
          title: "Lixeira boladona",
          id: 1
        },
        {
          coordinate: { latitude: -22.800, longitude: -43.2096 },
          description: "Lixeira de Teste",
          title: "Lixeira boladona",
          id: 2
        },
        {
          coordinate: { latitude: -22.600, longitude: -43.2096 },
          description: "Lixeira de Teste",
          title: "Lixeira boladona",
          id: 3
        },
        {
          coordinate: { latitude: -22.700, longitude: -43.2096 },
          description: "Lixeira de Teste",
          title: "Lixeira boladona",
          id: 4
        }
    ]

Logo, a tabela precisará de
    id : Chave primária (auto increment)
    lat: latitude
    long: longitude
    descricao : descricao sobre o que é aquele ponto de coleta, os lixos que ele armazena e zás
    titulo: nome do ponto

## Sobre os arquivos

### Script.sql

Neste arquivo há toda a arquitetura do banco de dados em sql, bem como alguns exemplos de inserções manuais para se testar.

### src/insert.php

Possui a função de ler os dados provenientes de um CSV (*qqq.csv*) e faz as querys de inserção.

### src/index.php

Emite o JSON com um array de objetos contendo os dados necessários do aplicativo, para ser pego pelo frontend.
