# Pokémon App

### Descrição
Esta aplicação permite que os usuários visualizem uma lista de Pokémon e acessem detalhes individuais de cada um. A aplicação foi desenvolvida utilizando React, TypeScript, e integra-se com a PokeAPI para buscar os dados dos Pokémon.

## Índice
1. [Instalação](#instalação)
2. [Scripts Disponíveis](#scripts-disponíveis)
3. [Funcionalidades](#funcionalidades)
4. [Storybook](#storybook)
5. [Tecnologias Utilizadas](#tecnologias-utilizadas)
6. [Licença](#licença)

## Instalação

1. [Clone o repositório](#clone-o-repositório):
```
git clone https://github.com/usuario/pokemon-app.git
cd pokemon-app
```

2. [Instale as dependências usando pnpm:):
```
pnpm install
```

## Scripts Disponíveis

- **`pnpm start`:**
    - Inicia o aplicativo em modo de desenvolvimento.
    - Abra [http://localhost:5173/](http://localhost:5173/) para ver no navegador.

- **`pnpm build`:**
    - Compila o aplicativo para produção na pasta `build`.

- **`pnpm test`:**
    - Executa os testes unitários.

- **`pnpm storybook`:**
    - Inicia o Storybook em modo de desenvolvimento.
    - Abra [http://localhost:6006](http://localhost:6006) para ver no navegador.

- **`pnpm build-storybook`:**
    - Compila a documentação do Storybook para a pasta `storybook-static`.

## Funcionalidades

- **Listagem de Pokémon:**
    - Visualize uma lista de Pokémon com paginação.

- **Detalhamento de Pokémon:**
    - Clique em um Pokémon para ver seus detalhes, como tipos, habilidades e estatísticas.

- **Busca de Pokémon:**
    - Busque Pokémon pelo nome ou ID.

- **Design Responsivo:**
    - A aplicação é totalmente responsiva e funciona bem em dispositivos móveis e desktops.


## Storybook
O Storybook é utilizado para documentar e testar os componentes da aplicação de forma isolada.
Para visualizar os componentes, use o comando:

```
pnpm storybook
```

## Tecnologias Utilizadas

- **React.js** - Biblioteca para construção de interfaces de usuário.
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática.
- **pnpm** - Gerenciador de pacotes rápido e eficiente.
- **Storybook** - Ferramenta para desenvolvimento de componentes isolados.
- **PokeAPI** - API usada para obter dados dos Pokémon.
- **Jest** - Framework de testes em JavaScript.
- **React Testing Library** - Utilitário para testar componentes React.
- **CSS Modules** - Estilização dos componentes.

## Licença

Este projeto está licenciado sob a licença [MIT](./LICENSE).
