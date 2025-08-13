# Pedritor Next.js

Este é um projeto **Next.js** criado com o comando `create-next-app` e utilizando a **Geist**, uma nova família tipográfica da **Vercel**.  
O projeto foi estruturado para ser uma base sólida para uma landing page, com **componentes reutilizáveis** e **rotas dinâmicas**.

---

## 📑 Conteúdo
1. [Instalar e Rodar o Projeto](#instalar-e-rodar-o-projeto)  
2. [Estrutura de Arquivos](#estrutura-de-arquivos)  
3. [Componentes Principais](#componentes-principais)  
4. [Saiba Mais](#saiba-mais)  
5. [Fazer Deploy](#fazer-deploy)  

---

## 🚀 Instalar e Rodar o Projeto

### Dependências locais
Com o repositório clonado, instale as dependências do projeto:

```bash
npm install
```

### Rodar o Projeto
Para rodar o projeto localmente em modo de desenvolvimento, execute:

```bash
npm run dev
```

O servidor de desenvolvimento será iniciado e a aplicação estará disponível em:

[http://localhost:3000](http://localhost:3000)

---

## 📂 Estrutura de Arquivos

A organização do projeto segue a convenção do **App Router** do Next.js, com componentes principais definidos na pasta `app/components`.

- **app/**: Contém as rotas e o layout principal da aplicação.
  - **page.tsx**: Página inicial da aplicação.
  - **layout.tsx**: Layout global, que inclui o Header e o Footer.
- **components/**: Pasta para componentes reutilizáveis, como `header`, `footer`, `hero`, etc.
- **[pasta]/page.tsx**: Cada pasta dentro de `app` representa uma nova rota, como `app/contatos/page.tsx` para a página de contato.

---

## 🧩 Componentes Principais

O projeto utiliza uma arquitetura baseada em **componentes** para facilitar a manutenção e a reutilização. Alguns dos principais:

- **Header**: Barra de navegação superior, com links para as principais seções da landing page.
- **Footer**: Seção inferior da página, com informações de contato, links sociais e de navegação.
- **Hero**: Seção de destaque da página inicial, geralmente com um título e uma chamada para ação.

---

## 📚 Saiba Mais

- [📖 Documentação do Next.js](https://nextjs.org/docs) – Saiba mais sobre os recursos e a API do Next.js.  
- [🎯 Aprenda Next.js](https://nextjs.org/learn) – Tutorial interativo de Next.js.

---

## Arquivos .env

-**.env.sample**: Arquivo padrão que deve ser configurado ao iniciar o sistema.
---
## ☁️ Fazer Deploy

A maneira mais fácil de fazer o deploy da sua aplicação Next.js é usando a **Plataforma Vercel**, criada pelos desenvolvedores do Next.js.

Para mais detalhes, consulte:  
[📄 Documentação de Deploy com Next.js](https://nextjs.org/docs/deployment)
