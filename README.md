# 📚 DMAE Estudos

Aplicação web criada para auxiliar na preparação para o concurso do **DMAE Uberlândia 2026**.

O projeto reúne materiais de estudo organizados por matéria e por assunto, oferecendo uma experiência mais prática para leitura, resolução de exercícios e acompanhamento do progresso pelo celular ou computador.

O conteúdo das matérias foi organizado com base nas apostilas recebidas, mantendo as explicações e os exercícios dos materiais utilizados. O objetivo da aplicação é facilitar a navegação e o estudo, sem transformar a experiência em uma simples leitura de vários arquivos PDF separados.

---

## 📖 Matérias disponíveis

Atualmente, o DMAE Estudos possui:

- 📘 **Língua Portuguesa**
- 📐 **Matemática e Raciocínio Lógico**
- 🗂️ **Conhecimentos Específicos**

As matérias estão separadas por assuntos e capítulos para facilitar a localização do conteúdo e permitir que cada pessoa acompanhe o que já estudou.

Outras disciplinas do concurso poderão ser acrescentadas posteriormente.

---

## ✨ Funcionalidades

A aplicação possui:

- menu lateral adaptado para celular e computador;
- matérias organizadas separadamente;
- capítulos divididos por assunto;
- conteúdo das apostilas organizado para leitura;
- explicações e exercícios dos materiais utilizados;
- questões com alternativas;
- correção automática das respostas;
- indicação visual de resposta correta ou errada;
- acompanhamento do desempenho;
- registro das questões respondidas;
- marcação de capítulos concluídos;
- barra de progresso por matéria;
- progresso geral dos estudos;
- botão para continuar de onde a pessoa parou;
- navegação entre capítulos;
- busca por matéria ou assunto;
- modo claro e escuro;
- ajuste do tamanho da fonte e da interface;
- layout responsivo para celular, tablet e computador;
- instalação na tela inicial como aplicativo;
- funcionamento como PWA;
- progresso salvo automaticamente no navegador.

---

## ✅ Correção dos exercícios

As respostas corretas ficam cadastradas internamente no sistema.

Ao responder uma questão, o aplicativo informa automaticamente se a alternativa escolhida está:

- ✅ correta;
- ❌ errada.

Dessa forma, não é necessário consultar um gabarito separado durante o estudo.

O desempenho é atualizado conforme as questões são respondidas.

---

## 📊 Progresso individual

Cada pessoa que acessa o site possui seu próprio progresso salvo no navegador do aparelho utilizado.

O sistema registra informações como:

- capítulos concluídos;
- último capítulo acessado;
- matérias iniciadas;
- questões respondidas;
- respostas corretas;
- respostas incorretas;
- porcentagem de desempenho;
- ponto em que a pessoa parou.

Nesta etapa, os dados são armazenados por meio do `localStorage`.

Isso significa que o progresso fica separado por:

- aparelho;
- navegador;
- perfil de navegador.

A atualização do site não apaga automaticamente o progresso salvo.

Entretanto, limpar os dados do navegador, usar o modo anônimo ou trocar de aparelho pode fazer com que o progresso não esteja disponível.

---

## 👥 Uso por outras pessoas

O site pode ser acessado por várias pessoas.

Cada usuário terá seu próprio progresso no navegador e aparelho em que estiver estudando.

Nesta versão, não é necessário criar conta para acessar o conteúdo.

Em uma etapa futura, poderá ser adicionado login por e-mail para permitir:

- conta individual;
- progresso salvo na nuvem;
- sincronização entre celular e computador;
- recuperação do progresso ao trocar de aparelho;
- histórico de estudos por usuário.

---

## 📱 Instalação no celular

O DMAE Estudos pode ser adicionado à tela inicial e utilizado como um aplicativo.

### Android

1. Abra o site pelo Google Chrome.
2. Toque nos três pontos do navegador.
3. Selecione **Adicionar à tela inicial** ou **Instalar aplicativo**.
4. Confirme a instalação.

### iPhone

1. Abra o site pelo Safari.
2. Toque no botão de compartilhamento.
3. Selecione **Adicionar à Tela de Início**.
4. Confirme.

Depois disso, o ícone do DMAE Estudos ficará disponível na tela do celular.

---

## 🔄 Atualizações

Quando uma nova versão for enviada ao GitHub, o site será atualizado automaticamente pelo GitHub Pages.

As pessoas que utilizam o aplicativo não precisam baixar ou instalar tudo novamente.

Como a aplicação utiliza Service Worker, em alguns casos pode ser necessário:

- fechar e abrir o aplicativo novamente;
- atualizar a página;
- aguardar alguns instantes até a nova versão ser carregada.

---

## 🛠️ Tecnologias utilizadas

O projeto utiliza:

- HTML5;
- CSS3;
- JavaScript;
- LocalStorage;
- PWA;
- Web App Manifest;
- Service Worker;
- Git;
- GitHub;
- GitHub Pages.

---

## 📁 Estrutura atual do projeto

```text
dmae-estudos/
├── index.html
├── styles.css
├── app.js
├── manifest.webmanifest
├── sw.js
├── .nojekyll
├── README.md
├── assets/
│   └── icon.svg
└── apostila/
    └── Apostila-ICL-Lingua-Portuguesa.pdf
A estrutura poderá crescer conforme novas matérias, imagens, documentos, vídeos e funcionalidades forem adicionados.

---

## 🌐 Publicação

O projeto é hospedado gratuitamente pelo GitHub Pages.

### Endereço do site

[https://karlakryz-codes.github.io/dmae-estudos/](https://karlakryz-codes.github.io/dmae-estudos/)

### Repositório

[https://github.com/karlakryz-codes/dmae-estudos](https://github.com/karlakryz-codes/dmae-estudos)

---

## 🚀 Próximas melhorias

Entre as melhorias previstas estão:

- adicionar as demais matérias do concurso;
- ampliar o banco de exercícios;
- criar uma área de questões erradas;
- permitir refazer apenas questões incorretas;
- criar simulados por matéria;
- criar simulados completos;
- apresentar estatísticas mais detalhadas;
- adicionar resumos em vídeo;
- permitir favoritos e anotações;
- criar login por e-mail;
- integrar Firebase ou Supabase;
- sincronizar o progresso entre aparelhos;
- criar perfis individuais;
- permitir recuperação da conta e do progresso;
- melhorar a experiência de instalação como aplicativo.

---

## ⚠️ Observação sobre o progresso

O progresso atual é salvo no navegador.

Por isso, recomenda-se não:

- limpar os dados do navegador;
- apagar os dados do site;
- estudar sempre pelo modo anônimo;
- desinstalar o navegador sem necessidade.

Essas ações podem remover as informações armazenadas localmente.

---

## ⚖️ Aviso sobre os materiais

O projeto utiliza materiais de estudo recebidos para preparação do concurso.

A responsabilidade pela autorização de uso, reprodução e compartilhamento dos materiais pertence à responsável pelo projeto.

Antes de disponibilizar conteúdos de terceiros publicamente, deve-se confirmar se há autorização para publicação e distribuição integral.

---

## 👩‍💻 Autoria

Projeto criado e mantido por **Karla Kryz**.

GitHub: [@karlakryz-codes](https://github.com/karlakryz-codes)

---

## 📌 Status do projeto

🚧 **Em desenvolvimento **