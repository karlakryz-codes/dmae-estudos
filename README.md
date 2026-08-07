# DMAE Estudos

Aplicação web de estudos para o concurso do **DMAE Uberlândia 2026**.

Nesta primeira versão, o projeto contém a disciplina de **Língua Portuguesa**, usando a apostila ICL como conteúdo-base. O material é exibido nas páginas originais do PDF, sem reescrever, resumir ou alterar as explicações. A aplicação apenas organiza a navegação por assuntos.

## Funcionalidades

- menu lateral adaptado ao celular;
- 15 capítulos organizados conforme os assuntos do edital;
- busca por capítulo;
- leitura do PDF original dentro do site;
- modo claro e escuro;
- ajuste do tamanho da interface;
- marcação de capítulos concluídos;
- barra de progresso;
- botão para continuar de onde parou;
- navegação entre capítulo anterior e próximo;
- instalação na tela inicial como aplicativo (PWA);
- progresso salvo localmente no navegador de cada aparelho.

## Conteúdo atual

- Língua Portuguesa — apostila ICL completa.

## Próximas etapas

- adicionar Matemática e Raciocínio Lógico;
- adicionar Conhecimentos Específicos;
- inserir exercícios com correção automática;
- criar login por e-mail;
- salvar progresso individual na nuvem com Firebase ou Supabase;
- sincronizar o progresso entre diferentes aparelhos.

## Progresso individual

Nesta versão, cada pessoa que acessar o site terá seu progresso salvo no próprio navegador por meio do `localStorage`. Os dados ficam separados por aparelho e navegador.

Para sincronizar o desempenho entre celular e computador ou recuperar os dados após trocar de aparelho, será necessário conectar posteriormente um banco online, como Firebase ou Supabase.

## Tecnologias

- HTML
- CSS
- JavaScript
- PWA / Service Worker
- GitHub Pages

## Estrutura

```text
├── index.html
├── styles.css
├── app.js
├── manifest.webmanifest
├── sw.js
├── .nojekyll
├── assets/
│   └── icon.svg
└── apostila/
    └── Apostila-ICL-Lingua-Portuguesa.pdf
```

## Publicação no GitHub Pages

1. Envie todos os arquivos e pastas para a raiz do repositório `dmae-estudos`.
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/ (root)`.
5. Clique em **Save**.

O endereço será:

`https://karlakryz-codes.github.io/dmae-estudos/`

## Aviso sobre direitos de uso

A apostila é material de terceiros. Antes de disponibilizar o repositório e o site publicamente, confirme que você possui autorização para compartilhar integralmente o conteúdo.

## Autoria

Projeto criado e mantido por **Karla Kryz**.
