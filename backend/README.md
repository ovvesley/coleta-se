# Backend PHP [Com adição do BD MySQL]

Neste repositório irá ser tratado a conexão do coleta-se com o Banco de Dados em Mysql.
Este repositório estará sob supervisão minha (Enzo Zamora [[enzo-z](https://github.com/enzo-z)]), um eterno aprendiz da programação.

## Momento de Prototipação (Versão 1.2)

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

## Sobre as mudanças desde a última versão

### Script.sql

Neste arquivo há toda a arquitetura do banco de dados em SQL. Além disso, há a adição de uma tabela clone. Estamos com o backend preparado para recepcionar nossa futura implementação: permitir o usuário entrar com dados.

A tabela clone (userinserts) será utilizada para recepcionar os dados enviados pelo usuário, e os dados serão validados pela nossa equipe, e adicionados na tabela principal!

Claro, a ideia no futuro é fazer uma automatização dessde processo de verificação!

### src/

Dentro do diretório src, temos todos os nossos scripts! Os scripts no diretório src são referentes ao [[servidor]](coletase.ueuo.com), bem como possui um diretório admin, para nossa equipe realizar a inserção de novos dados!

### index.php e geraJSON

Aqui o JSON está sendo gerado no formato explicado acima, para ser tratado pelo frontend com os dados coletados!

### admin/

Aqui há um formulário para inserção de dados novos, e scripts de segurança para assegurar que os dados inseridos não gerarão redudâncias, bem como não serão enviados caso haja falta de algum dado! Note que os mesmos scripts foram utilizados para atender o usuário!

## Sobre nossa futura atualização

Nossa próxima implementação é tornar a interação do usuário 100% funcional, permitindo que ele envie pontos de coleta de seu conhecimento! Para isso, estamos também gerando um JSON em geraERROS.php, contendo o código de erros a serem tratados no frontend caso haja alguma inconsistência com os dados!
