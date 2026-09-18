# Vinícius Silva — Portfólio

Portfólio em português, responsivo, construído com React e Vite. Inclui apresentação, experiência, projetos com filtros, habilidades e contato direto pelo LinkedIn.

## Desenvolvimento

Node.js **22.12+** (recomendado: Node 22 LTS).

```sh
npm ci
npm run dev
```

## Verificações

```sh
npm run lint
npm test
npm run build
npm audit
```

`npm run preview` serve a versão de produção localmente. O build é gerado em `dist/`.

## Publicação na Vercel

- Framework: **Vite** (substitui a configuração anterior de Create React App).
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`

O arquivo `vercel.json` mantém essas opções explícitas. Não há backend ou variáveis de ambiente obrigatórias.

## Conteúdo e links

- `src/data.js`: perfis, projetos e habilidades.
- `src/App.jsx`: apresentação e experiência (preservadas a partir do conteúdo anterior).
- `src/index.css`: identidade visual e estilos responsivos.
- `index.html`: título, descrição e metadados de compartilhamento.
- `public/favicon.svg`: ícone próprio.

### Pendências editoriais

1. **Currículo:** o repositório original continha apenas um PDF de outra pessoa. Ele foi removido. Até receber o PDF correto, a interface orienta solicitar o currículo pelo LinkedIn, sem fingir um download.
2. **Projetos:** não foram fornecidas URLs reais de demos ou repositórios individuais. Os cards informam isso e permitem conversar sobre o projeto. Ao disponibilizar URLs verificadas, adicione-as aos dados e à interface.
3. **Contato:** não há serviço de envio de mensagens nem endereço de e-mail confirmado. O contato é feito diretamente pelo LinkedIn já informado no portfólio. Um formulário só deve ser adicionado com integração real, validação e estados de envio.
4. Confirme a precisão das experiências, datas, autoria e imagens dos projetos antes de publicar. Nenhum resultado ou credencial foi inventado na reformulação.

## Acessibilidade e desempenho

Navegação por âncoras reais, link de pulo, foco visível, menu com Escape e contenção de foco, filtros com estado anunciado, respeito a movimento reduzido e imagens WebP com dimensões e carregamento diferido. Fontes são servidas localmente, sem requisições ao Google Fonts, e têm fallback do sistema.
