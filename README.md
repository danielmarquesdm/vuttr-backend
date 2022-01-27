# vuttr-backend

## API REST para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.


![Badge](https://img.shields.io/static/v1?label=license&message=MIT&color=%3CCOLOR%3E&style=%3CSTYLE%3E&logo=%3CLOGO%3E)
![Badge](https://img.shields.io/static/v1?label=version&message=1.0.0&color=%3CCOLOR%3E&style=%3CSTYLE%3E&logo=%3CLOGO%3E)

---
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

---
###  Rodando a aplicação

```bash
# Clone este repositório
$ git clone <https://github.com/danielmarquesdm/vuttr-backend.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd vuttr-backend

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```
---
### Tecnologias
#### • Node 
#### • Express 
#### • TypeScript 
#### • TypeORM 
#### • PostgreSQL 
---
### Features

- [x] Cadastrar nova ferramenta
- [x] Listar todas as ferramentas
- [x] Filtrar ferramenta por tag 
- [x] Filtrar ferramenta por title
- [x] Deletar ferramenta por id