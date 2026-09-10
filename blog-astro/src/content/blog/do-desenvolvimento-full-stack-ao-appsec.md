---
title: "Do desenvolvimento full stack ao AppSec: o que aprendi com o Caatinga Malware DB"
description: "Como os estudos sobre ransomware e o trabalho desenvolvido com o professor Sidney na UFPE estão ampliando minha formação em segurança de aplicações."
pubDate: "2026-09-10"
author: "Romário Jonas"
tags:
  - AppSec
  - Caatinga Malware DB
  - cibersegurança
  - desenvolvimento full stack
  - ransomware
  - UFPE
draft: false
category: "Projetos"
readTime: "7 min"
image: "/caatinga-malware-db-capitulo-3.png"
---

Durante boa parte da minha trajetória profissional, acostumei-me a olhar para um sistema a partir da perspectiva de quem precisa construí-lo. Penso nas regras de negócio, na comunicação entre frontend e backend, na persistência dos dados, nos testes e na experiência de quem utilizará a aplicação.

Nos últimos meses, porém, comecei a exercitar com mais frequência outro olhar: o de quem precisa entender como um sistema pode ser comprometido, quais evidências uma ameaça deixa para trás e o que deveria ter sido feito antes para reduzir seu impacto.

Essa mudança não significa abandonar o desenvolvimento de software. Pelo contrário. Ela tem ampliado a maneira como compreendo o trabalho de um desenvolvedor full stack e aproximado minha formação de áreas como segurança de aplicações, engenharia de segurança e AppSec.

Uma parte importante desse processo surgiu no trabalho que venho realizando na Universidade Federal de Pernambuco junto ao professor **Sidney Marlon Lopes de Lima**. Dessa colaboração nasceu uma contribuição para o capítulo 3 da apostila _Segurança da Informação — Práticas de Laboratório_ e também o desenvolvimento do projeto <a href="https://github.com/UFPE-Seguranca-Ofensiva/caatinga-malware-db" target="_blank" rel="noopener noreferrer">Caatinga Malware DB</a>.

## Quando ransomware deixou de ser apenas uma notícia

Ransomware costuma aparecer em notícias por meio de números: organizações afetadas, serviços interrompidos, valores exigidos e dados supostamente vazados. Esses números mostram a dimensão do problema, mas não explicam completamente o que acontece dentro de um sistema comprometido.

No laboratório, a ameaça deixa de ser uma ideia abstrata. É possível observar arquivos que recebem novas extensões, processos que aparecem e desaparecem rapidamente, notas de resgate criadas na área de trabalho e ferramentas de recuperação que funcionam somente para determinadas famílias ou versões.

O capítulo 3 concentra-se no **reuso de chaves criptográficas**. Em alguns casos, os operadores de ransomware reutilizam chaves entre diferentes vítimas. Quando essas chaves são obtidas por operações policiais, vazamentos de infraestrutura criminosa ou outras ações de resposta, elas podem ser incorporadas a ferramentas públicas de descriptografia.

Foi nesse contexto que estudamos iniciativas como o [No More Ransom](https://www.nomoreransom.org/pt/index.html) e realizamos experimentos controlados com os ransomwares Jigsaw e Alcatraz. A proposta não era simplesmente executar um malware e observar o estrago. Era preparar um ambiente isolado, registrar o comportamento da amostra, testar a recuperação dos arquivos e compreender os limites dessa recuperação.

Um antivírus pode interromper uma infecção ativa, mas isso não significa que ele conseguirá desfazer a criptografia já aplicada aos dados. Da mesma forma, a existência de um _decryptor_ público não garante que ele servirá para qualquer variante de uma família. Essa diferença parece pequena quando apresentada teoricamente, mas se torna muito mais clara quando acompanhamos todo o ciclo em laboratório.

## Minha contribuição para o capítulo 3

Minha participação envolveu transformar observações práticas em conhecimento que pudesse ser consultado, reproduzido e ampliado por outras pessoas.

Além dos estudos com Jigsaw e Alcatraz, o capítulo apresenta um mapeamento entre três fontes com finalidades diferentes: o No More Ransom, que disponibiliza ferramentas de recuperação; o MalwareBazaar, que reúne amostras e metadados; e o TheZoo, utilizado como acervo de artefatos para pesquisa.

Cruzar essas fontes revelou que nem sempre existe uma correspondência simples entre o nome de uma família, uma amostra disponível e uma ferramenta capaz de recuperar seus arquivos. Há diferenças de nomenclatura, cobertura e versão. Em vários casos, uma família possui um _decryptor_, mas não apresenta uma amostra facilmente confirmável por assinatura pública em determinada base.

Esse levantamento ajudou a definir um caminho para novos experimentos, mas também evidenciou um problema maior: executar uma análise não basta. É necessário registrar exatamente qual artefato foi utilizado, de onde ele veio, em que ambiente foi examinado, quais comportamentos foram observados e até onde as conclusões podem ser reproduzidas.

Essa preocupação levou o trabalho para além da apostila.

## Do experimento ao Caatinga Malware DB

O <a href="https://github.com/UFPE-Seguranca-Ofensiva/caatinga-malware-db" target="_blank" rel="noopener noreferrer">Caatinga Malware DB — CMDB</a> é uma base acadêmica aberta, mantida pela organização UFPE-Segurança-Ofensiva, para o estudo, a análise e a documentação de malwares reais em contextos educacionais e defensivos.

No projeto, venho contribuindo para organizar aquilo que aprendemos no laboratório em uma estrutura pública e mais duradoura. Isso inclui relatórios técnicos de diferentes famílias de ransomware, versões em português e inglês, modelos de documentação, guias para os experimentos e critérios para preservar evidências e identificar amostras por seus hashes SHA-256.

O repositório já reúne estudos sobre famílias como Alcatraz, Cerber, Akira, Petya e Thanos. Mais do que acumular arquivos, a intenção é construir documentação que ajude estudantes, pesquisadores e profissionais a distinguir uma observação verificada de uma hipótese ou de uma informação obtida em fonte externa.

Também existe uma responsabilidade que não pode ser ignorada: estamos lidando com artefatos potencialmente destrutivos. Por isso, o projeto possui avisos de uso responsável, regras para contribuição e cuidados específicos com o armazenamento de amostras. Um arquivo compactado com senha reduz o risco de abertura acidental, mas não substitui isolamento, controle de acesso e procedimentos adequados de laboratório.

Participar da construção dessas regras tem sido tão importante quanto analisar o comportamento dos ransomwares. Segurança não depende apenas de ferramentas. Ela também depende de processo, revisão, rastreabilidade, comunicação e limites bem definidos.

## O que isso muda no meu trabalho como desenvolvedor

Antes desses estudos, eu já me preocupava com autenticação, autorização, validação de entradas, tratamento de erros e proteção de dados. Entretanto, trabalhar com malware tornou as consequências de algumas decisões muito menos abstratas.

Passei a observar com mais atenção onde um sistema deposita confiança, quais permissões um processo realmente precisa, que informações os logs deveriam preservar e como uma aplicação se comporta quando algo sai do fluxo esperado. Também comecei a valorizar ainda mais práticas como princípio do menor privilégio, segregação de ambientes, verificação de integridade, dependências confiáveis e planos de recuperação.

Minha experiência full stack ajuda bastante nesse processo. Conhecer as diferentes camadas de uma aplicação permite compreender como uma falha aparentemente localizada pode atravessar APIs, serviços, bancos de dados, interfaces e infraestrutura. Ao mesmo tempo, os estudos de segurança me fazem retornar ao desenvolvimento com perguntas melhores.

Não considero que alguns experimentos sejam suficientes para me definir como especialista em AppSec. Seria uma conclusão precipitada. O que posso afirmar é que estou construindo uma combinação de competências que aponta nessa direção: desenvolvimento de software, análise de riscos, documentação técnica, testes, pesquisa aplicada e preocupação com todo o ciclo de vida de uma aplicação.

Talvez meu próximo cargo tenha o nome de AppSec Engineer, Application Security Analyst, Security Engineer ou algum título híbrido que ainda nem sei definir direito. O nome importa menos do que a capacidade que estou desenvolvendo de aproximar dois mundos que muitas vezes conversam menos do que deveriam: quem constrói software e quem precisa protegê-lo.

## A importância de trabalhar com orientação

O trabalho com o professor Sidney também tem me ajudado a compreender a diferença entre encontrar uma resposta e produzir conhecimento confiável.

Em uma atividade individual, é fácil considerar um teste concluído assim que a ferramenta apresenta uma mensagem de sucesso. Em um trabalho acadêmico, precisamos perguntar se a amostra foi identificada corretamente, se o resultado pode ser repetido, se as evidências sustentam a conclusão e se outra pessoa conseguiria compreender os limites do experimento.

Essa postura tem influência direta sobre minha formação profissional. Revisar uma análise técnica não é tão diferente de revisar uma implementação: em ambos os casos, precisamos identificar suposições, procurar lacunas, registrar decisões e aceitar que uma primeira versão dificilmente será a definitiva.

O contato entre orientação acadêmica e prática de engenharia vem me ensinando a ser mais cuidadoso sem perder a vontade de experimentar. É uma combinação que pretendo levar para qualquer função que venha a exercer, seja como desenvolvedor full stack, seja atuando de maneira mais especializada em segurança de aplicações.

## Um projeto que conecta partes da minha formação

O Caatinga Malware DB ainda está crescendo, assim como minha atuação nessa área. Há relatórios a revisar, famílias a estudar, processos a melhorar e muitas questões técnicas e éticas que exigem atenção.

Talvez seja justamente isso que torne o projeto tão importante para mim. Ele não funciona apenas como uma atividade acadêmica ou como mais um repositório no meu perfil. Ele conecta minha experiência profissional em desenvolvimento full stack a uma área que desejo compreender melhor e registra essa evolução por meio de trabalho concreto.

Quando comecei a estudar ransomware, queria entender como essas ameaças se comportavam. Aos poucos, percebi que o aprendizado era maior: documentar com rigor, testar com responsabilidade, reconhecer limites e pensar na segurança antes que o incidente aconteça.

Ainda não sei qual será o título exato do cargo que reunirá todas essas competências. Sei, porém, o tipo de profissional que pretendo me tornar: alguém capaz de construir software entendendo melhor como ele pode falhar, como pode ser atacado e, principalmente, como pode ser protegido.
