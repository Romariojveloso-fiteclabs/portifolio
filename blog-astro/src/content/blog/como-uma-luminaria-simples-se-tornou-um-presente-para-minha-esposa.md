---
title: "Como uma luminária simples se tornou um presente para minha esposa"
description: "Às vezes, um projeto pequeno de eletrônica acaba tendo mais valor do que algo tecnicamente sofisticado. A história de recuperação de uma luminária de lua 3D."
pubDate: "2026-06-24"
category: "Projetos"
readTime: "5 min"
image: "/moon_lamp.png"
---

Às vezes, um projeto pequeno acaba tendo mais valor do que algo tecnicamente sofisticado.

A luminária que construí para minha esposa começou exatamente assim: não como uma grande ideia de engenharia, nem como um produto bem acabado, mas como uma tentativa simples de recuperar uma peça que já existia e que havia parado de funcionar.

Era uma luminária em formato de lua, feita em impressão 3D, cujo LED original havia sido danificado. A primeira motivação foi bastante direta: fazer a luz voltar a funcionar.

Entretanto, conforme comecei a pensar no circuito, o projeto deixou de ser apenas um reparo e passou a ter um significado um pouco maior. Eu queria construir algo com minhas próprias mãos, usando os componentes que tinha disponíveis, sem gastar muito e sem transformar uma ideia simples em um problema desnecessariamente complexo.

## A ideia inicial

A primeira proposta era criar uma luminária um pouco mais parecida com modelos comerciais.

A ideia envolvia usar um sensor de toque capacitivo, como o módulo TTP223, para ligar e desligar a iluminação ao tocar na própria lua. Esse sensor enviaria um sinal para um MOSFET, que seria responsável por chavear a corrente do LED.

O conceito inicial era algo próximo disso:

```text
Fonte USB 5V
+
Sensor touch TTP223
+
MOSFET
+
LED 5V
```

Dessa forma, o sensor funcionaria apenas como controle, enquanto o MOSFET faria o trabalho de alimentar o LED com mais segurança.

Antes de montar fisicamente, cheguei a simular a ideia no LTspice. Como ainda não tinha o sensor touch em mãos, usei uma fonte pulsada no lugar dele, apenas para representar o sinal de controle. A simulação mostrou o funcionamento esperado do MOSFET como chave eletrônica, ligando e desligando a carga.

No papel, a solução parecia interessante.

Mas projetos reais quase sempre seguem um caminho diferente do planejamento inicial.

## A escolha do LED

Para recuperar a iluminação da lua, escolhi um módulo circular de LED de baixa tensão.

Ele tinha características adequadas para esse tipo de aplicação:

```text
Tensão de trabalho: 5V DC
Potência máxima: até 3W
Fonte luminosa: 6 LEDs SMD5730
Diâmetro externo: 31 mm
Cor: branco quente
```

O formato circular ajudava bastante, pois se encaixava melhor dentro da estrutura da luminária. Além disso, por funcionar em 5V, o LED poderia ser alimentado por USB, reduzindo a complexidade do projeto e evitando tensões mais altas.

Esse ponto foi importante para manter a montagem simples e segura.

## Os primeiros testes

Com o LED em mãos, comecei os testes na fonte de bancada.

<div class="flex justify-center my-6">
	<img 
		src="/test_led.jpg" 
		alt="Teste de tensão do LED na fonte de bancada" 
		class="max-w-md w-full rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm" 
	/>
</div>

Primeiro, avaliei o brilho em torno de 400 mA. O resultado já era bastante satisfatório. Depois, testei uma corrente um pouco maior, próxima de 500 mA, mas percebi que não fazia sentido forçar tanto o componente.

A luminária precisava iluminar bem, mas não precisava operar no limite.

No final, escolhi um ponto de funcionamento próximo de:

```text
Tensão: aproximadamente 4,4V a 5V
Corrente: aproximadamente 430 mA
Potência: cerca de 1,8W a 2,2W
```

Esse valor pareceu um bom equilíbrio entre brilho, aquecimento e vida útil do LED.

Essa etapa foi interessante porque mostrou uma diferença importante entre apenas fazer algo acender e fazer algo funcionar de maneira mais adequada. O LED poderia entregar mais potência, mas isso não significava que eu precisava usar tudo que ele suportava.

## A mudança de caminho

Durante o desenvolvimento, percebi que eu estava prestes a complicar demais um projeto que tinha uma necessidade muito simples.

O módulo TTP223 ainda não estava disponível, e a luminária já poderia funcionar de maneira prática sem sensor touch, sem botão e sem MOSFET.

Então decidi simplificar.

A versão final passou a seguir uma lógica muito mais direta:

```text
Entrada USB-C 5V
+
Resistência limitadora
+
LED circular 5V
```

Com isso, a luminária acende automaticamente quando conectada a uma fonte USB e apaga quando é desconectada.

O circuito final ficou simples:

```text
USB-C VBUS +5V
   |
Resistor limitador
   |
Positivo do LED

USB-C GND
   |
Negativo do LED
```

No módulo USB-C, utilizei apenas os pinos de alimentação:

```text
VBUS = +5V
GND  = negativo
```

Os pinos D+, D-, CC1 e CC2 não eram necessários para essa versão.

Essa decisão deixou o projeto menos sofisticado, mas muito mais objetivo.

## O valor de uma solução simples

Como eu tinha resistores de 1/2W disponíveis, considerei usar uma associação para dividir melhor a dissipação de potência e limitar a corrente do LED.

A resistência ficou próxima da faixa de:

```text
1Ω a 1,5Ω
```

O objetivo era evitar que o LED puxasse corrente demais ao ser ligado diretamente em uma fonte USB comum.

Não era a versão mais elegante possível. Também não era a versão mais completa. Mas era uma solução funcional, barata e compatível com os materiais que eu possuía naquele momento.

E isso foi uma das partes mais importantes do projeto.

Muitas vezes, em eletrônica e programação, existe uma vontade de adicionar recursos antes mesmo de resolver o problema principal. Sensor touch, controle de brilho, PWM, bateria, chave física e acabamento melhor são ideias interessantes, mas nenhuma delas era indispensável para a luminária voltar a cumprir sua função.

O primeiro objetivo era fazer a lua acender novamente.

E ela acendeu.

## Quando o circuito sai da bancada

Existe uma satisfação diferente quando um circuito deixa de ser apenas uma simulação, um desenho ou uma montagem provisória em protoboard.

Quando o LED acendeu dentro da luminária, o projeto deixou de ser apenas um exercício técnico. Ele passou a ser um objeto real, com uma função real e destinado a uma pessoa específica.

Não era apenas uma placa, um resistor e alguns fios. Era uma luminária simples, feita manualmente, para minha esposa.

Esse tipo de projeto tem um valor que não aparece na lista de componentes.

Uma luminária comprada provavelmente teria acabamento melhor, controle por toque, bateria interna e talvez até controle de intensidade. Mas ela não carregaria o mesmo processo. Não teria os testes, as pequenas decisões, os erros, as mudanças de caminho e a tentativa de transformar componentes soltos em algo útil.

## O que aprendi com esse projeto

O principal aprendizado foi que projetos simples também merecem ser feitos e documentados.

Nem todo projeto precisa ser complexo para ensinar algo. Nesse caso, a luminária me ajudou a praticar escolhas de alimentação, corrente, dissipação, montagem física e simplificação de circuito.

Também me lembrou que terminar uma versão funcional pode ser mais importante do que perseguir uma versão ideal que nunca fica pronta.

A ideia inicial previa uma luminária com sensor capacitivo, MOSFET e acionamento por toque. A versão final ficou mais simples: alimentação USB-C direta, limitação de corrente e LED circular.

Ainda assim, ela funcionou.

E, naquele momento, funcionar era o mais importante.

## Possíveis melhorias futuras

A versão atual cumpre seu objetivo, mas existem várias melhorias possíveis para uma próxima etapa.

Eu poderia adicionar o TTP223 para permitir acionamento por toque. Também poderia usar um MOSFET para fazer o chaveamento eletrônico de forma mais adequada, incluir controle de brilho por PWM, melhorar a dissipação térmica ou criar um suporte interno para afastar melhor o LED do plástico.

Outra melhoria seria adicionar um difusor para suavizar a luz e deixar o resultado visual mais agradável.

Também seria possível criar uma nova estrutura interna, com melhor acabamento, chave liga/desliga ou até bateria recarregável.

Mas essas melhorias podem esperar.

Por enquanto, o mais importante é que a luminária voltou a funcionar.

Ela começou como um reparo simples, passou por uma ideia mais sofisticada e terminou como um projeto direto, barato e útil.

No fim, talvez esse seja o melhor resumo da experiência: uma pequena lua impressa em 3D voltou a acender, e junto com ela veio mais uma lembrança de que construir algo com as próprias mãos ainda tem um valor especial.
