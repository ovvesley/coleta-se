import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";

import { styles } from "./styles";


export default function Info() {
  return (
    <ScrollView style={styles.container}>
      <Card title="Como posso descartar isso?">
        <Image
          source={require("../../../assets/pilha.png")}
          style={{ width: 30, height: 50 }}
        />
        <Text style={styles.textBody}>
          Para fazer o descarte de pilhas e baterias é necessário, antes de
          tudo, armazenar as pilhas e/ou apenas embalá-las em plástico
          resistente para evitar contato com umidade a fim de evitar
          vazamentos.
        </Text>
      </Card>

      <Card title="Como posso descartar isso?">
        <Image
          source={require("../../../assets/lamp.png")}
          style={{ width: 60, height:60 }}
        />
        <Text style={styles.textBody}>
          Quando as lâmpadas da sua casa queimarem, 
          não as jogue no lixo reciclável, menos ainda no lixo comum. 
          Embale-as em papel ou caixa de papelão, evite os sacos plásticos, 
          pois elas correm o risco de quebrar no caminho.
          Se estiver apenas queimada, 
          é possível encaminhá-la aos centros que comercializam a lâmpada, 
          a fim de que façam o tratamento adequado. Agora, se estiver quebrada, 
          coloque-a em uma caixa de papelão ou enrolada em um papel, 
          e a leve para uma loja ou revendedora que faça o recolhimento do material.
          Veja o mapa ou a lista para achar este serviço.
        </Text>
      </Card>

      <Card title="Como posso descartar isso?">
        <Image
          source={require("../../../assets/oil.png")}
          style={{ width: 25, height: 40 }}
        />
        <Text style={styles.textBody}>
          Para descartar o oléo de fritura velho,
          armazene-o em uma garrafa PET. Conforme for usando óleo,
          vá armazenando na garrafa. Após encher a(s) garrafa(s),
          procure empresas e/ou ONGs especializadas neste tipo de descarte.
          Veja o mapa ou a lista para achar este serviço.
        </Text>
      </Card>

      <Card title="Como posso descartar isso?">
        <Image
          source={require("../../../assets/cellphone.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.textBody}>
          O lixo eletrônico deve ser separado dos resíduos orgânicos.
          O descarte deve ser feito em locais apropriados, como: empresas,
          cooperativas de reciclagem, centros de estudos.
        </Text>
      </Card>

      <Card title="Como posso descartar isso?">
        <Image
          source={require("../../../assets/plastic.png")}
          style={{ width: 50, height: 60 }}
        />
        <Text style={styles.textBody}>
          O plástico é o material mais utilizado no nosso dia-a-dia, praticamente, tudo é feito de
          plástico. É de conhecimento geral que o plástico demora muito para se decompor, daí a
          importância da reciclagem.
          O plástico além de reciclagem, pode ser facilmente reutilizado, dado a sua facilidade e suas
          "1001 utilidades".
          O descarte deve ser feito em locais adequados, mas sempre dê preferência ao reuso.
        </Text>
      </Card>

      <Card title="Como posso descartar isso?">
        <Image
          source={require("../../../assets/iron.png")}
          style={{ width: 30, height: 30 }}
        />
        <Text style={styles.textBody}>
          O metal é um dos materiais mais utilizados no nosso dia-a-dia. É de extrema importância
          para o meio ambiente que esse material seja reciclado.
          A reciclagem consegue evitar que eles acabem de ir pros rios, aterros sanitários e lagos.
          O metal reciclado é praticamente igual ao comum. Pode ser reciclado várias vezes sem
          perder a qualidade.
          O descarte deve ser feito nos locais adequados.
        </Text>
      </Card>

      <Card containerStyle={{ borderRadius: 20 }} title={"Informações"}>
        <Text style={styles.textTitle}></Text>
        <Text style={styles.subTitle}>Saiba mais sobre o coleta-se</Text>
        <View style={styles.body}>
          <Image
            source={require("../../../assets/carro_de_lixo.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text style={styles.textBody}>
            O coleta-se é um app que busca ajudar aqueles que procuram
            descartar o lixo da maneira ecológicamente correta.
          </Text>

          <Text style={styles.textBody}>
            Dividido em telas, proporcionamos ao usuário um mapa com os
            principais pontos para a coleta de lixo ecológico e uma lista
            planificada desses tais pontos.
          </Text>
        </View>
      </Card>
    </ScrollView>
  );
}
