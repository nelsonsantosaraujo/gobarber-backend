<h1 align="center">
  <img alt="Logo" src="https://ik.imagekit.io/t58nj4hrrhv/logo_o0SeXCgx_Q.svg" alt="GoBarber Hairdcuts and Shaves">
</h1>

<h3 align="center">
  API REST para o projeto GoBarber
</h3>

## 📓 Sobre o projeto ***GoBarber***

GoBarber é um projeto para barbearias realizarem a gestão dos agendamentos de seus prestadores de serviço e seus clientes.

Foi desenvolvido durante o ***Bootcamp 14*** da ***[Rocketseat](https://rocketseat.com.br)***

Esta API tem como objetivo fornece e armazenar no banco de dados os dados relacionados aos usuários/fornecedores e seus agendamentos.

Para ver a API em funcionando utilize os clientes abaixo:

- Para prestadores de serviço ***Cliente web:*** [GoBarber Web](https://github.com/nelsonsantosaraujo/gobarber-web)
- Para usuários (clientes) ***Cliente mobile:*** [GoBarber Mobile](https://github.com/nelsonsantosaraujo/gobarber-mobile)

Ou use as rotas da API no ***Insomnia***

1. Download [Insomnia Core](https://insomnia.rest/download/)
2. Importe as rotas dentro do Insomnia [Rotas GoBarber](https://github.com/nelsonsantosaraujo/gobarber-backend/blob/main/Insomnia_gobarber.json)

---

## 🚀 Tecnologias

Abaixo as tecnologias utilizadas para construção da API

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)

---

## 💻 Configurações necessárias

### **Requisitos**

Antes de começar instale os programas abaixo:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/docker-community)

### **Clone do projeto**

```bash
# Execute o comando git clone para realizar o clone do repositório
$ git clone https://github.com/nelsonsantosaraujo/gobarber-backend.git
# Entre na pasta do repositório clonado
$ cd gobarber-backend
```

### **Iniciando o projeto**

```bash
# Rode yarn para instalar as dependências
$ yarn

# Na raiz do projeto crie uma copia do arquivo .env.example
# Altere o nome da copia para .env
# Preencha as variáveis ambiente
$ cp .env.example .env

# Crie uma instância do postgresql para armazenamento dos dados da API
$ docker run --name gobarber-postgres -e POSTGRES_USER=postgres \
              -e POSTGRES_DB=gostack_gobarber \
              -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Crie uma instância do MongoDB para armazenar as notificações da API
$ docker run --name gobarber-mongodb -p 27017:27017 -d -t mongo

# Crie uma instância do Redis para armazenar o cache da API
$ docker run --name gobarber-redis -p 6379:6379 -d -t redis:alpine

# Na raiz do projeto crie uma copia do arquivo ormconfig.example.json
# Altere o nome da copia para ormconfig.json
# Preencha as configurações da base de dados
$ cp ormconfig.example.json ormconfig.json

# Após instalar as dependências e iniciar as instâncias dos banco de dados
#execute o comando abaixo para realizar a criação das tabelas no postgresql
$ yarn typeorm migration:run

# Para iniciar o projeto em modo de desenvolvimento execute
$ yarn dev:server

# Pronto a API está pronta para uso.
```

---

## 📝 Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais informações.

---

Feito por Nelson Araújo 📃  [Linkedin](https://www.linkedin.com/in/nelsonsantosaraujo/)
