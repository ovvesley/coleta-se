# Projeto 'coleta-se' [Protótipo]

O projeto coleta-se trata-se de um projeto organizado pelos alunos de ensino médio do CEFET-RJ *[Maracaña]*, dos cursos técnico-integrado de Informática e Eletrônica. Seus membros são Enzo Zamora ([enzo-z](https://github.com/enzo-z)), Lucas Maia ([Robootic](https://github.com/Robootic)), Gabriel Dias ([Leorna](https://github.com/Leorna)), Gabriel Amaral ([amaral220x](https://github.com/amaral220x)) e Wesley Ferreira ([vvesly](https://github.com/vvesly/)) e o orientador é o professor Renato Mauro.

Tudo foi pensado e realizado em prol do curso Startup in School - um curso disponibilizado pela Google em parceria com a Ideias de Futuro - que visa o aprendizado do empreendimento tecnológico inovador para alunos de ensino médio.

O 'coleta-se' essencialmente é uma plataforma de busca para pontos de coleta seletiva. Em implementações futuras, planejamos permitir com que o usuário possa sinalizar que na área dele não há pontos de coleta (dado um raio de x km), e com a ocorrência de muitas sinalizações em determinada área, obtermos um levantamento dos locais necessitados!

## Tecnologias Utilizadas no protótipo

Nosso grupo optou por codar um aplicativo utilizando de uma tecnologia atual (**React Native**) para o frontend, permitindo o acesso multiplataforma do aplicativo. Testamos o produto em ambos Android e iOS! O backend foi feito de uma maneira mais tradicional, em PHP e um banco de dados em MySQL.
Atualmente, o protótipo conta com três telas:

1. O Mapa : Onde mostra os locais de coleta seletiva
2. A lista: Onde mostra todos os locais de coleta seletiva e algumas descrições
3. Info: Informações sobre descartes de materiais.

Com isso, há como se obter uma boa ideia sobre nossos planos de implementações futuras, e permitimos uma boa visualização do 'core' da nossa ideia!

## Como testar o protótipo [How-to]

Para testar o protótipo em seu aparelho, é necessária a instalação do [yarn](https://yarnpkg.com/en/docs/install#debian-stable) e do [expo](https://docs.expo.io/versions/v35.0.0/introduction/installation/), bem como o download de todos os arquivos de nosso repositórios (seja por meio do **arquivo.zip** ou meio do **git clone**)!

### (Ubuntu)

Com a instalação feita de ambos, será necessário abrir o terminal no diretório em  **(*~/coleta-se/frontend/coleta-se*)** e utilizar

	sudo yarn install

para a instalação das dependências!

Após isso, basta utilizar

	sudo yarn start

e isto disponibilizará a porta 19002 do seu localhost para acesso, bem como um *QR code* no terminal.

### Testando no seu aparelho

Para testar o aplicativo no seu aparelho, lembre-se de estar conectado ao mesmo wi-fi do seu computador (em que está roteando o serviço), e que o firewall do seu computador esteja desativado (para evitar problemas de acesso do celular!)

#### **Android**

Basta baixar o aplicativo do '**expo**' na PlayStore e scanear o *QR code* disponibilizado pelo seu terminal (ou mesmo o disponibilizado no localhost:19002 no seu navegador) e testar!

#### **iOS**

Para testar nosso protótipo, basta baixar o aplicativo do '**expo**' na App Store e logo após isso abrir sua câmera! Com ela, scaneie o **QR code** disponibilizado pelo terminal (ou o mesmo disponibilizado no localhost:19002 em seu navegador). Seu telefone automaticamente irá pedir para abrir o aplicativo do '**expo**'. Agora basta testar!

##### Para mais informações sobre a utilização, entre em contato
